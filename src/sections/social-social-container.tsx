import { ISocial } from '@/types/social.types';
import SocialCarouselSection from './social-carousel';
import { getAll } from '@/services/social.service';

export default async function SocialSocialContainer() {
  const social: ISocial[] | Error = await getAll();

  return (
    <section className='flex flex-col items-center gap-8 p-8'>
      {social instanceof Error ? (
        <span className='text-base font-medium text-blue-400 lg:text-lg xl:text-xl'>
          {social.message}
        </span>
      ) : (
        <SocialCarouselSection data={social} />
      )}
    </section>
  );
}
