import Image from "next/image";
import Link from "next/link";

export default function LocaleNotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="not-found-page__card">
        <Image src="/images/404-error.png" alt="Page not found" width={500} height={376} priority />
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="btn btn--primary btn--lg">
          Go Home
        </Link>
      </div>
    </main>
  );
}
