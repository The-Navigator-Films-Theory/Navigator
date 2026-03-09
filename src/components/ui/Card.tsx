import type { HTMLAttributes } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card(props: CardProps) {
  return (
    <div
      {...props}
      className={['rounded-xl border border-white/10 bg-[rgb(var(--panel))] p-4', props.className]
        .filter(Boolean)
        .join(' ')}
    />
  );
}
