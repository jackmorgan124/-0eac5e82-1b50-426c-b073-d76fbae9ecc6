import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import AboutSplit from '@/components/blocks/about-split';
import AboutStats from '@/components/blocks/about-stats';
import TrustBadges from '@/components/blocks/trust-badges';

export const metadata: Metadata = {
  title: 'About | Harris Landscaping & Gardens',
  description:
    "South-West Sydney's trusted landscaping team with 15+ years of experience, 500+ projects completed, and a fully insured local crew.",
};

export default function Page() {
  return (
    <>
      <Navbar
        cta="Get a Free Quote"
        logo="Harris Landscaping & Gardens"
        links={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/services', label: 'Services' },
          { href: '/project-gallery', label: 'Project Gallery' },
          { href: '/service-areas', label: 'Service Areas' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaHref="/contact"
        logoHref="/"
      />
      <AboutSplit
        body="With over 15 years of hands-on experience, Harris Landscaping & Gardens has built a reputation for quality workmanship, attention to detail, and honest service across South-West Sydney. Our fully insured, locally based team works closely with homeowners, builders, and investors to deliver outdoor spaces that are as functional as they are beautiful. We don't cut corners — every project is completed to the highest standard, on time and within budget."
        image="/images/about-team.jpg"
        stats={[
          { label: 'Years Experience', value: '15+' },
          { label: 'Projects Completed', value: '500+' },
          { label: 'Fully Insured', value: '100%' },
        ]}
        heading="South-West Sydney's Trusted Landscaping Team"
        imageAlt="Harris Landscaping & Gardens team at work on a South-West Sydney project"
      />
      <AboutStats
        items={[
          { label: 'Years of Experience', value: '15', suffix: '+' },
          { label: 'Projects Completed', value: '500', suffix: '+' },
          { label: 'Fully Insured', value: '100', suffix: '%' },
        ]}
        heading="Our Track Record Speaks for Itself"
      />
      <TrustBadges
        items={[
          { icon: '/images/badge-experience.svg', label: '15+ Years Experience' },
          { icon: '/images/badge-insured.svg', label: 'Fully Insured' },
          { icon: '/images/badge-projects.svg', label: '500+ Projects Completed' },
          { icon: '/images/badge-local.svg', label: 'Local South-West Sydney Team' },
          { icon: '/images/badge-quote.svg', label: 'Obligation-Free Quotes' },
        ]}
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens delivers premium turf, paving, retaining walls, decking, and garden design for homeowners and builders across South-West Sydney. 15+ years of trusted local expertise."
        email="info@harrislandscaping.com.au"
        phone="0400 000 000"
        columns={[
          {
            links: [
              { href: '/services#turf', label: 'Turf Installation' },
              { href: '/services#paving', label: 'Paving' },
              { href: '/services#retaining-walls', label: 'Retaining Walls' },
              { href: '/services#decking', label: 'Decking' },
              { href: '/services#garden-design', label: 'Garden Design' },
              { href: '/services#garden-maintenance', label: 'Garden Maintenance' },
            ],
            heading: 'Services',
          },
          {
            links: [
              { href: '/service-areas/campbelltown', label: 'Campbelltown' },
              { href: '/service-areas/camden', label: 'Camden' },
              { href: '/service-areas/narellan', label: 'Narellan' },
              { href: '/service-areas/picton', label: 'Picton' },
              { href: '/service-areas/macarthur', label: 'Macarthur Region' },
              { href: '/service-areas/south-west-sydney', label: 'South-West Sydney' },
            ],
            heading: 'Service Areas',
          },
          {
            links: [
              { href: '/about', label: 'About Us' },
              { href: '/project-gallery', label: 'Project Gallery' },
              { href: '/contact', label: 'Contact' },
              { href: '/contact', label: 'Get a Free Quote' },
            ],
            heading: 'Company',
          },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  );
}
