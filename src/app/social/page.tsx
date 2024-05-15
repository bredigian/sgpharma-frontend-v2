import PageHeader from '@/components/page-header';
import SocialSocialContainer from '@/sections/social-social-container';
import socialBackground from '@/assets/background/social.png';

export default function Social() {
  return (
    <main className='flex flex-col'>
      <PageHeader
        title='Desarrollo social'
        description='Tenemos un departamento encargado el cual agenda y calendariza actividades como jornadas médicas en hospitales o municipalidades, con lo que hacemos llegar nuestro producto a la población de forma integral.'
        image={socialBackground}
      />
      <SocialSocialContainer />
    </main>
  );
}
