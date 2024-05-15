import { ISocial } from '@/types/social.types';
import PageHeader from '@/components/page-header';
import SocialCarouselSection from '@/sections/social-carousel';
import { getAll } from '@/services/social.service';
import socialBackground from '@/assets/background/social.png';

export default async function Social() {
  const social: ISocial[] = await getAll();

  return (
    <main className='flex flex-col'>
      <PageHeader
        title='Desarrollo social'
        description='Tenemos un departamento encargado el cual agenda y calendariza actividades como jornadas médicas en hospitales o municipalidades, con lo que hacemos llegar nuestro producto a la población de forma integral.'
        image={socialBackground}
      />
      <SocialCarouselSection data={social} />
    </main>
  );
}
