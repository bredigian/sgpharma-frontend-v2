import PageHeader from '@/components/page-header';
import ProductsFilter from '@/components/products-filter';
import ProductsProductsContainerSection from '@/sections/products-products-container';
import productsBackground from '@/assets/background/products.png';

export default function Products({
  searchParams,
}: {
  searchParams: { filter?: string; type?: string };
}) {
  const filter = searchParams?.filter ?? '';
  const type = searchParams.type ?? '';

  return (
    <main className='flex flex-col'>
      <PageHeader
        title='Nuestros productos'
        description='Conoce cada una de nuestras líneas especializadas con medicamentos de calidad europea creados para apoyarte en el cuidado de la salud'
        image={productsBackground}
      />
      <ProductsFilter type={type} />
      <ProductsProductsContainerSection query={filter} type={type} />
    </main>
  );
}
