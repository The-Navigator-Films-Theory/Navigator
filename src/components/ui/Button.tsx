import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={[
        'rounded-md bg-[rgb(var(--accent))] px-3 py-2 text-sm font-medium text-white transition hover:brightness-110',
        props.className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}
