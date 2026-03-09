type LoadingProps = {
  label?: string;
};

export default function Loading({ label = 'Loading...' }: LoadingProps) {
  return <p className="mt-6 text-sm text-white/70">{label}</p>;
}
