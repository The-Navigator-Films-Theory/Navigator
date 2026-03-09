import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[rgb(var(--panel))] p-8 shadow-glow">
      <p className="text-sm uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Film Theory Navigator</p>
      <h1 className="mt-3 font-display text-4xl">Explore cinematic ideas with clarity.</h1>
      <p className="mt-4 max-w-2xl text-white/80">
        Browse key film theories, compare thinkers, and dive into examples through a searchable, structured library.
      </p>
      <Link
        to="/theory"
        className="mt-6 inline-flex rounded-md bg-[rgb(var(--accent))] px-4 py-2 font-medium text-white transition hover:brightness-110"
      >
        Open Theory Library
      </Link>
    </section>
  );
}
