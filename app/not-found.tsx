import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-narrow max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-2 text-navy">Page Not Found</h1>
        <span className="divider-rule mx-auto" />
        <p className="mt-4 text-ink leading-relaxed">
          The page you were looking for could not be found. Use the navigation
          above or return to the home page.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-primary">Return Home</Link>
          <Link href="/contact" className="btn btn-secondary">Contact the Firm</Link>
        </div>
      </div>
    </section>
  );
}
