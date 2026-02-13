import PageHero from '../../components/shared/PageHero';
import AboutSection from '../../components/AboutSection';
import WhyChooseUs from '../../components/WhyChooseUs';
import PatientJourney from '../../components/PatientJourney';
import CTABanner from '../../components/CTABanner';

function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        titleAccent="Physica"
        subtitle="Personalized care for movement, recovery, and independence. Learn about our mission, values, and the team dedicated to your wellbeing."
        breadcrumb="About"
        image="https://www.shutterstock.com/image-photo/five-diverse-medical-experts-clinical-260nw-2557673817.jpg"
      />
      <AboutSection />
      <WhyChooseUs />
      <PatientJourney />
      <CTABanner />
    </>
  );
}

export default AboutPage;
