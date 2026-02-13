import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../../components/shared/PageHero';
import ServicesSection from '../../components/ServicesSection';
import CTABanner from '../../components/CTABanner';

function ServicesPage() {
  const { hash } = useLocation();

  // Deep-linking: scroll to service by hash
  useEffect(() => {
    if (hash) {
      // Small delay to let the page render before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <>
      <PageHero
        title="Our"
        titleAccent="Services"
        subtitle="Comprehensive, integrated care designed to help you move better, feel better, and live without limitations."
        breadcrumb="Services"
        image="https://hbconstruction.com/wp-content/uploads/2019/02/WEBNMJC-Allied-Health-Hi-Res-2-1920x1220.jpg"
      />
      <ServicesSection hideHeader />
      <CTABanner />
    </>
  );
}

export default ServicesPage;
