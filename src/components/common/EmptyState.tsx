type EmptyStateProps = {
  message: string;
};

export default function EmptyState({ message }: EmptyStateProps) {
  return <p className="mt-6 rounded-md border border-white/10 bg-white/5 p-4 text-white/75">{message}</p>;
}
