import Link from 'next/link';

export default function HomeProductsSection() {
  return (
    <section
      // ref={ref}
      // initial='hidden'
      // animate={controls}
      // variants={{
      //   visible: { opacity: 1 },
      //   hidden: { opacity: 0 },
      // }}
      // transition={{ duration: 0.5, delay: 0.25 }}
      className='3xl:w-[75%] mb-52 flex w-full flex-col items-center gap-24 p-8 lg:p-16'
    >
      <div className='flex w-full flex-col items-center gap-4'>
        <span className='text-xs font-semibold tracking-[5px] text-blue-200 md:text-sm lg:text-base'>
          PRODUCTOS
        </span>
        <span className='max-w-[1000px] text-center text-3xl font-semibold md:text-[40px] lg:text-5xl xl:text-[4.5rem]'>
          Productos y servicios de primera calidad
        </span>
      </div>
      {/* <div className='flex flex-wrap items-center justify-center gap-24'>
          {errorProducts ? (
            <div className='grid w-full place-items-center sm:h-[280px] lg:h-[420px]'>
              <h3 className='text-center text-black sm:text-sm lg:text-lg xl:text-xl'>
                {errorProducts}
              </h3>
            </div>
          ) : loading ? (
            <div className='grid w-full place-items-center sm:h-[280px] lg:h-[420px]'>
              <Ring size={60} color='#031432' />
            </div>
          ) : (
            productsFavorites?.map((product, index) => {
              return (
                <ProductItem
                  key={product.ID}
                  handleHover={handleHover}
                  index={index}
                  outHover={() => setProductHovered(null)}
                  product={product}
                  productHovered={productHovered}
                  styles={'sm:h-[280px] lg:h-[420px]'}
                  isFavorite
                />
              );
            })
          )}
        </div> */}
      <Link
        href={'/products'}
        className='mt-8 rounded-full bg-blue-300 px-10 py-4 text-xs font-semibold text-white hover:bg-yellow-sgpharma hover:text-blue-300 md:text-sm xl:text-base'
      >
        Más productos
      </Link>
    </section>
  );
}
