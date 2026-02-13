import PageHero from '../../components/shared/PageHero';
import Contact from '../../components/Contact';
import HoursSection from '../../components/HoursSection';
import CTABanner from '../../components/CTABanner';

function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        titleAccent="Us"
        subtitle="Ready to start your recovery? Reach out by phone, email, or visit our Irvine clinic."
        breadcrumb="Contact"
        image="https://www.shutterstock.com/image-photo/doctor-discussing-medical-records-couple-600nw-2613322263.jpg"
      />
      <Contact hideHeader />
      <HoursSection />
      <CTABanner />
    </>
  );
}

export default ContactPage;
