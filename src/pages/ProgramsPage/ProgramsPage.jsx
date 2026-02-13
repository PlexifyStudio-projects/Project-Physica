import PageHero from '../../components/shared/PageHero';
import ProgramsSection from '../../components/ProgramsSection';
import InsuranceSection from '../../components/InsuranceSection';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';

function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Programs &"
        titleAccent="Insurance"
        subtitle="Evidence-based outpatient programs and flexible insurance options to support your recovery journey."
        breadcrumb="Programs"
        image="https://hbconstruction.com/wp-content/uploads/2019/07/Lovelace-Osuna_HB-10web-1920x1220.jpg"
      />
      <ProgramsSection hideHeader />
      <InsuranceSection hideHeader />
      <FAQSection hideHeader />
      <CTABanner />
    </>
  );
}

export default ProgramsPage;
