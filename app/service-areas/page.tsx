import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import ServiceAreaGrid from '@/components/blocks/service-area-grid';
import ImageTextSplit from '@/components/blocks/image-text-split';
import CtaBanner from '@/components/blocks/cta-banner';
import FooterColumns from '@/components/blocks/footer-columns';

export const metadata: Metadata = {
  title: 'Service Areas | Harris Landscaping & Gardens',
  description:
    'Harris Landscaping & Gardens proudly serves Campbelltown, Camden, Narellan, Picton, the Macarthur region, and the wider South-West Sydney area.',
};

export default function ServiceAreasPage() {
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
      <ServiceAreaGrid
        areas={[
          { href: '/service-areas/campbelltown', name: 'Campbelltown' },
          { href: '/service-areas/camden', name: 'Camden' },
          { href: '/service-areas/narellan', name: 'Narellan' },
          { href: '/service-areas/picton', name: 'Picton' },
          { href: '/service-areas/macarthur', name: 'Macarthur Region' },
          { href: '/service-areas/south-west-sydney', name: 'South-West Sydney' },
        ]}
        heading="Landscaping Services Across South-West Sydney"
        subheading="Harris Landscaping & Gardens proudly serves homeowners, builders, and property investors throughout Campbelltown, Camden, Narellan, Picton, and the wider South-West Sydney region."
      />
      <ImageTextSplit
        cta="Get a Free Quote"
        body="As a South-West Sydney-based business, we understand the unique landscape conditions, block types, and council requirements across our service region. Whether you're in Campbelltown, Camden, Narellan, or Picton, our team brings the same high standard of workmanship and local expertise to every project. We've spent 15-plus years building relationships and outdoor spaces across this community — and we're proud to call South-West Sydney home."
        image="/images/service-areas-local.jpg"
        ctaHref="/contact"
        heading="Local Knowledge. Premium Results."
        imageAlt="Harris Landscaping & Gardens team working on a local South-West Sydney project"
        imagePosition="right"
      />
      <CtaBanner
        cta="Get a Free Quote"
        ctaHref="/contact"
        heading="Serving Your Suburb — Get a Free Quote Today"
        subheading="No matter where you are in South-West Sydney, Harris Landscaping & Gardens is ready to deliver the outdoor space you've always wanted."
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
