import { CSSProperties, ReactNode } from 'react';

export default function Card({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: CSSProperties;
}) {
  return (
    <div style={styles} className='rounded-2xl bg-white shadow-2xl'>
      {children}
    </div>
  );
}
