type ErrorStateProps = {
  message: string;
};

export default function ErrorState({ message }: ErrorStateProps) {
  return <p className="mt-6 rounded-md border border-red-300/30 bg-red-500/10 p-3 text-red-100">{message}</p>;
}
