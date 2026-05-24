/** @type {import('next').NextConfig} */
const technologyImageHosts = [
  'xpertlab.com',
  'www.synapseindia.com',
  'infynno.com',
  'substackcdn.com',
  'miro.medium.com',
  'cdn.dribbble.com',
  'upload.wikimedia.org',
  'i.pinimg.com',
  'www.fastcomet.com',
  'jimmydqv.com',
  'webimages.mongodb.com',
  'www.opensourceforu.com',
  'res.cloudinary.com',
  'cdn.prod.website-files.com',
  'neon.com',
  'econsulting.bf',
  'blog.webcrowd.co.in',
  'i.ytimg.com',
  'encrypted-tbn0.gstatic.com',
  'www.solodev.com',
  'stackify.com',
  'thumbs.dreamstime.com',
  'img.freepik.com',
  'rates.fm',
  's3-alpha.figma.com',
  'naturaily.com',
  'a.storyblok.com',
  'static0.xdaimages.com',
  'static.learnkube.com',
  'wallpapercave.com',
  'storage.ghost.io',
];

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: technologyImageHosts.map((hostname) => ({
      protocol: 'https',
      hostname,
      pathname: '/**',
    })),
  },
};

export default nextConfig;
