import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-lg text-foreground/60 mb-8 max-w-md mx-auto">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
