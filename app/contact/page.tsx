import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import ContactForm from '@/components/blocks/contact-form';
import ContactMap from '@/components/blocks/contact-map';

export const metadata: Metadata = {
  title: 'Contact | Harris Landscaping & Gardens',
  description:
    "Get in touch with Harris Landscaping & Gardens for an obligation-free quote on your South-West Sydney landscaping project.",
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
      <ContactForm
        formCta="Send My Quote Request"
        heading="Get in Touch With Our Team"
        subheading="Ready to transform your outdoor space? Fill out the form below or reach us directly — we'll get back to you promptly with an obligation-free quote and clear project timeline."
      />
      <ContactMap
        email="info@harrislandscaping.com.au"
        hours="Mon–Fri: 6:30am – 4:30pm | Sat: By Appointment | Sun: Closed"
        phone="0400 000 000"
        address="Campbelltown, NSW 2560"
        heading="Find Us in South-West Sydney"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.0!2d150.8135!3d-34.0647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12e3b0e0e0e0e0%3A0x0!2sCampbelltown+NSW+2560!5e0!3m2!1sen!2sau!4v1600000000000"
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
