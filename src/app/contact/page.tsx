import ContactInformationSection from '@/sections/contact-information';
import ContactMapSection from '@/sections/contact-map';
import PageHeader from '@/components/page-header';
import contactBackground from '@/assets/background/contact.png';

export default function Contact() {
  return (
    <main className='flex flex-col items-center'>
      <PageHeader title='Contáctanos' image={contactBackground} />
      <ContactInformationSection />
      <ContactMapSection />
    </main>
  );
}
