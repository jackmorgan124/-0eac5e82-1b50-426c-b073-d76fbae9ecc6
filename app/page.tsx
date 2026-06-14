import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import HeroSplit from '@/components/blocks/hero-split';
import ServicesGrid from '@/components/blocks/services-grid';
import GalleryBeforeAfter from '@/components/blocks/gallery-before-after';
import ReviewsCarousel from '@/components/blocks/reviews-carousel';

export const metadata: Metadata = {
  title: 'Harris Landscaping & Gardens',
  description:
    'Premium landscaping for South-West Sydney homes — turf, paving, retaining walls, decking, and full garden transformations from Harris Landscaping & Gardens.',
};

export default function HomePage() {
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
      <HeroSplit
        cta="Get a Free Quote"
        image="/images/hero.jpg"
        ctaHref="/contact"
        headline="Premium Landscaping for South-West Sydney Homes"
        imageAlt="Premium landscaping project completed by Harris Landscaping & Gardens in South-West Sydney"
        trustBadge="Trusted by 500+ homeowners across South-West Sydney"
        subheadline="From retaining walls and paving to lush turf and full garden transformations — Harris Landscaping & Gardens delivers exceptional outdoor spaces built to last."
      />
      <ServicesGrid
        items={[
          'Turf Installation — Supply and lay premium turf for a healthy, lush lawn all year round',
          'Paving — Durable, beautifully finished paving for driveways, paths, and entertaining areas',
          'Retaining Walls — Structurally sound and stylish retaining walls designed for any slope or space',
          'Decking — Custom timber and composite decking that extends your living space outdoors',
          'Garden Design — Tailored garden designs that enhance the natural beauty of your property',
          'Garden Maintenance — Ongoing care and maintenance to keep your outdoor space looking its best',
        ]}
        heading="Our Landscaping Services"
        subheading="We offer a complete range of outdoor services for homeowners, builders, and property investors across Campbelltown, Camden, Narellan, Picton, and beyond."
      />
      <GalleryBeforeAfter
        pairs={[
          { after: '/images/after-1.jpg', label: 'Turf Installation — Campbelltown', before: '/images/before-1.jpg' },
          { after: '/images/after-2.jpg', label: 'Paving & Entertaining Area — Camden', before: '/images/before-2.jpg' },
          { after: '/images/after-3.jpg', label: 'Retaining Wall — Narellan', before: '/images/before-3.jpg' },
          { after: '/images/after-4.jpg', label: 'Garden Transformation — Picton', before: '/images/before-4.jpg' },
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse our portfolio of completed landscaping projects across South-West Sydney — including before-and-after transformations for turf, paving, retaining walls, decking, and more."
      />
      <ReviewsCarousel
        items={[
          {
            name: 'Sarah M.',
            rating: 5,
            review:
              'Harris Landscaping transformed our backyard completely. The team was professional, on time, and the results exceeded our expectations.',
            location: 'Campbelltown',
          },
          {
            name: 'James T.',
            rating: 5,
            review:
              'Outstanding paving work on our driveway and alfresco area. Highly recommend to anyone in the South-West Sydney region.',
            location: 'Camden',
          },
          {
            name: 'Rachel K.',
            rating: 5,
            review:
              'From the initial quote to the final cleanup, everything was seamless. Beautiful retaining wall that has completely changed our sloped block.',
            location: 'Narellan',
          },
          {
            name: 'David L.',
            rating: 5,
            review:
              'Fantastic turf installation — the lawn looks incredible. Great communication throughout the whole project.',
            location: 'Picton',
          },
        ]}
        heading="What Our Clients Are Saying"
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
