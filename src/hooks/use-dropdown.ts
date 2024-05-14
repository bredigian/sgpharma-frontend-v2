import { useState } from 'react';

export const useDropdown = () => {
  const [active, setActive] = useState<number | null>(null);

  const handleActive = (index: number) =>
    setActive(index === active ? null : index);

  return {
    active,
    handleActive,
  };
};
