import fs from 'node:fs';
import nodemailer from 'nodemailer';

function loadEnvLocal() {
  const path = '.env.local';
  if (!fs.existsSync(path)) {
    console.error('Missing .env.local — create it in the project root (not .env).');
    process.exit(1);
  }
  return Object.fromEntries(
    fs
      .readFileSync(path, 'utf8')
      .split('\n')
      .filter((line) => line && !line.startsWith('#'))
      .map((line) => {
        const i = line.indexOf('=');
        return [line.slice(0, i).trim(), line.slice(i + 1).trim().replace(/^["']|["']$/g, '')];
      }),
  );
}

const env = loadEnvLocal();
const user = env.SMTP_USER;
const pass = (env.SMTP_PASS ?? '').replace(/\s/g, '');

if (!user || !pass) {
  console.error('SMTP_USER and SMTP_PASS must be set in .env.local');
  process.exit(1);
}

console.log('Testing SMTP for:', user);
console.log('Password length:', pass.length, '(should be 16 for Gmail App Password)');

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(env.SMTP_PORT || 587),
  secure: Number(env.SMTP_PORT || 587) === 465,
  requireTLS: Number(env.SMTP_PORT || 587) !== 465,
  auth: { user, pass },
});

try {
  await transporter.verify();
  console.log('SUCCESS — SMTP login works. Restart npm run dev and try the contact form.');
} catch (err) {
  console.error('FAILED —', err.message);
  console.error(`
Common fixes:
1. SMTP_USER must be the EXACT Gmail account where you created the App Password.
2. Create the App Password while signed into ${user} at:
   https://myaccount.google.com/apppasswords
3. Copy the 16-character password when Google shows it (only shown once).
4. Put it in .env.local as SMTP_PASS=xxxxxxxxxxxxxxxx (no spaces, no quotes).
5. Restart: npm run dev
`);
  process.exit(1);
}
