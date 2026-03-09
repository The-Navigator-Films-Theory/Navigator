import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import ErrorState from '../components/common/ErrorState';
import Loading from '../components/common/Loading';
import { fetchTheoryBySlug } from '../lib/queries/theories';

export default function TheoryDetail() {
  const { slug = '' } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['theory', slug],
    queryFn: () => fetchTheoryBySlug(slug),
    enabled: Boolean(slug),
  });

  if (isLoading) return <Loading label="Loading theory..." />;
  if (error) return <ErrorState message="Theory could not be loaded." />;
  if (!data) return <ErrorState message="Theory not found." />;

  return (
    <article className="space-y-5 rounded-2xl border border-white/10 bg-[rgb(var(--panel))] p-6">
      <Link to="/theory" className="text-sm text-white/70 hover:text-white">
        Back to library
      </Link>
      <h1 className="font-display text-3xl">{data.title}</h1>
      <p className="text-white/75">{data.overview}</p>
      {data.history && (
        <section>
          <h2 className="mb-2 text-xl">History</h2>
          <p className="text-white/75">{data.history}</p>
        </section>
      )}
    </article>
  );
}
