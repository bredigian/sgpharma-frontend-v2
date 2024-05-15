'use client';

type Props = {
  name: string;
  file: string;
};

export default function ButtonShowInstructions({ name, file }: Props) {
  const openInsert = () => {
    window.open(file, '_blank', `${name} - Instrucciones`);
  };

  return (
    <button
      onClick={openInsert}
      className='mt-8 rounded-full bg-blue-300 px-10 py-4 text-xs font-semibold text-white hover:bg-yellow-sgpharma hover:text-blue-300 md:text-sm xl:text-base'
    >
      Ver inserto
    </button>
  );
}
