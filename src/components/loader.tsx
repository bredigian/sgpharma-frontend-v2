import { useEffect } from 'react';

export default function Loader({ size }: { size: number }) {
  useEffect(() => {
    const getLoader = async () => {
      const { ring } = await import('ldrs');
      ring.register();
    };
    getLoader();
  }, []);

  return <l-ring size={size} color='#fff'></l-ring>;
}
