import Image, { StaticImageData } from 'next/image';

type Props = {
  image: StaticImageData;
  title: string;
  description?: string;
};

export default function PageHeader({ image, title, description }: Props) {
  return (
    <section className='grid place-items-center'>
      <Image
        alt={`Header de sección '${title}'`}
        width={1000}
        height={1000}
        className='h-[450px] w-full object-cover lg:h-[500px] xl:h-[640px]'
        src={image}
      />
      <div className='absolute flex flex-col items-center gap-6 p-8'>
        <h1 className='text-center text-3xl font-semibold text-black md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
          {title}
        </h1>
        {description && (
          <p className='max-w-[820px] text-center text-xs text-black md:text-sm lg:text-base xl:text-lg'>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
