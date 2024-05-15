export default function ContactMapSection() {
  return (
    <div className='flex h-[300px] w-full justify-center overflow-hidden rounded-2xl p-8 xl:h-[450px] xl:w-[1200px] xl:p-16'>
      <iframe
        src={
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3860.3258507334986!2d-90.5926427!3d14.6374354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a10315204bdb%3A0x3b7e3f706f42096b!2sSG%20Pharma!5e0!3m2!1sen!2sar!4v1689984381066!5m2!1sen!2sar'
        }
        style={{
          border: '0',
          width: '100%',
          height: '100%',
        }}
        allowFullScreen={true}
        className='rounded-2xl'
        loading={'lazy'}
        referrerPolicy={'no-referrer-when-downgrade'}
      ></iframe>
    </div>
  );
}
