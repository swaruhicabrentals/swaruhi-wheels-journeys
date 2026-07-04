import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-navy-deep">404</h1>
        <h2 className="mt-4 font-display text-xl text-navy-deep">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link href="/" className="btn-gold">Go home</Link>
        </div>
      </div>
    </div>
  );
}
