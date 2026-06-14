import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import ServicesAlternating from '@/components/blocks/services-alternating';
import CtaBanner from '@/components/blocks/cta-banner';

export const metadata: Metadata = {
  title: 'Services | Harris Landscaping & Gardens',
  description:
    'Full-service landscaping across South-West Sydney — turf installation, paving, retaining walls, decking, garden design, and maintenance from Harris Landscaping & Gardens.',
};

export default function ServicesPage() {
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
      <ServicesAlternating
        items={[
          {
            image: '/images/service-turf.jpg',
            title: 'Turf Installation',
            imageAlt: 'Premium turf installation by Harris Landscaping & Gardens',
            description:
              "We supply and install premium turf varieties suited to South-West Sydney's climate, delivering lush, low-maintenance lawns for residential and new build properties.",
          },
          {
            image: '/images/service-paving.jpg',
            title: 'Paving',
            imageAlt: 'Beautifully finished paving by Harris Landscaping & Gardens',
            description:
              "From driveways to alfresco entertaining areas, our paving solutions are built to withstand the elements and enhance your property's kerb appeal and value.",
          },
          {
            image: '/images/service-retaining.jpg',
            title: 'Retaining Walls',
            imageAlt: 'Retaining wall construction by Harris Landscaping & Gardens',
            description:
              'We design and construct retaining walls that are structurally engineered and visually striking — ideal for sloped blocks and challenging terrain across the region.',
          },
          {
            image: '/images/service-decking.jpg',
            title: 'Decking',
            imageAlt: 'Custom decking installation by Harris Landscaping & Gardens',
            description:
              'Custom-built timber and composite decking designed to complement your home and create a seamless indoor-outdoor living experience.',
          },
          {
            image: '/images/service-garden-design.jpg',
            title: 'Garden Design & Landscaping',
            imageAlt: 'Garden design and landscaping by Harris Landscaping & Gardens',
            description:
              'Our team creates personalised garden designs that balance aesthetics, functionality, and sustainability — transforming any outdoor space into something extraordinary.',
          },
          {
            image: '/images/service-maintenance.jpg',
            title: 'Garden Maintenance',
            imageAlt: 'Garden maintenance services by Harris Landscaping & Gardens',
            description:
              'Keep your outdoor space in peak condition year-round with our regular maintenance packages, including mowing, pruning, mulching, and seasonal clean-ups.',
          },
        ]}
        heading="Full-Service Landscaping Across South-West Sydney"
      />
      <CtaBanner
        cta="Request a Free Quote"
        ctaHref="/contact"
        heading="Ready to Transform Your Outdoor Space?"
        subheading="Get in touch today for an obligation-free quote. We service Campbelltown, Camden, Narellan, Picton, and the wider South-West Sydney region."
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
