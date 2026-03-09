import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={[
        'rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none ring-[rgb(var(--accent))] focus:ring-1',
        props.className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}
