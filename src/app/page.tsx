"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Artists",
          id: "team",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Self-Ink-Flicted"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain",
      }}
      title="Unleash Your Inner Art"
      description="At Self-Ink-Flicted Studios, we combine professional artistry with a sterile, inviting environment to bring your vision to life."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dark-photo-different-equipment-tattoo-making-tattoo-salon_613910-17242.jpg",
          imageAlt: "Tattoo Art 1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-tattooing-with-gloves-medium-shot_23-2149525953.jpg",
          imageAlt: "Tattoo Art 2",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/master-making-tattoo-with-needle-machine_23-2147833979.jpg",
          imageAlt: "Tattoo Art 3",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-photo-attractive-pensive-girl-with-dreadlocks-tattooes-dhe-is-sketching-while-sitting-cafe_613910-17200.jpg",
          imageAlt: "Tattoo Art 4",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-tattooing-with-gloves_23-2149525957.jpg",
          imageAlt: "Tattoo Art 5",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dilligent-focused-tattoo-artist-is-creating-new-tattoo-young-woman-s-hand-tatoo-studio_613910-5857.jpg",
          imageAlt: "Tattoo Art 7",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-focused-tattoo-master-is-makining-tattoo-client-s-hand-dark-tattoo-salon_613910-17258.jpg",
          imageAlt: "Tattoo Art 8",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-tattoo-artist-working_23-2149445964.jpg",
          imageAlt: "Tattoo Art 9",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-tattoo-artist-work_23-2149525946.jpg",
          imageAlt: "Tattoo Art 10",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-artist-painting-tattoo-studio_23-2147834104.jpg",
          imageAlt: "Tattoo Art 11",
        },
      ]}
      buttons={[
        {
          text: "Book an Appointment",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-tattoo-master-is-standing-crossed-her-hands-while-attractive-girl-is-waiting-her-couch_613910-6219.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/tattoo-artist-doing-his-job-medium-shot_23-2149525945.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/tattoo-studio-with-masters-clients_23-2147834102.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-tattoo-artist-studio_23-2149525980.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-creative-master-with-dreadlocks-is-working-new-peace-big-leg-tattoo-customer_613910-2929.jpg",
          alt: "Client 5",
        },
      ]}
      avatarText="Join our community of ink enthusiasts"
      marqueeItems={[
        {
          type: "text",
          text: "Professional",
        },
        {
          type: "text",
          text: "Artistic",
        },
        {
          type: "text",
          text: "Sterile",
        },
        {
          type: "text",
          text: "Custom",
        },
        {
          type: "text",
          text: "Expert",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Us"
      title="Where Art Meets Safety"
      description="Located in the heart of Fort Collins, we are committed to providing premium tattoo and piercing services in a safe, professional setting."
      subdescription="Our studio is built on a passion for custom art and client satisfaction. From intricate sleeves to delicate piercings, our team is dedicated to perfection."
      imageSrc="http://img.b2bpic.net/free-photo/tattooed-hands-hands-holding-glass-with-coffee_1321-872.jpg"
      mediaAnimation="slide-up"
      icon={ShieldCheck}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          tag: "Ink",
          title: "Custom Tattooing",
          subtitle: "Unique & Tailored",
          description: "Whether you have a design in mind or want our artists to collaborate with you, we deliver stunning results.",
          imageSrc: "http://img.b2bpic.net/free-photo/tattoo-salon-process-tattoo-girl-stuffed-tattoo-process-stuffing-tattoo-body-hands-close-up_1321-3001.jpg",
        },
        {
          tag: "Safety",
          title: "Sterile Equipment",
          subtitle: "Medical Grade",
          description: "Your health and safety are our highest priorities. We adhere to the strictest hygiene standards in the industry.",
          imageSrc: "http://img.b2bpic.net/free-photo/hand-dipping-tattoo-pen-paint_23-2147834081.jpg",
        },
        {
          tag: "Piercing",
          title: "Professional Piercing",
          subtitle: "Gentle Procedure",
          description: "Experienced piercers ensuring a gentle, hygienic experience for all types of body modifications.",
          imageSrc: "http://img.b2bpic.net/free-photo/jewelry-maker-working-alone-atelier_23-2149025946.jpg",
        },
      ]}
      title="Our Services"
      description="Custom tattoo designs, expert body piercing, and a friendly, relaxed atmosphere."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Great quality",
          quote: "Got my sleeve done here, the quality and service here is awesome.",
          name: "Alex R.",
          role: "Regular Client",
          imageSrc: "http://img.b2bpic.net/free-photo/carefree-blonde-girl-posing-studio_176420-29631.jpg",
        },
        {
          id: "2",
          title: "Amazing artists",
          quote: "Great place, great people, talented artists that really listen.",
          name: "Sarah J.",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-tattooed-person_23-2149563303.jpg",
        },
        {
          id: "3",
          title: "Piercing success",
          quote: "The team did a fantastic job piercing my belly button, and my daughter's ears!",
          name: "Emily D.",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-with-make-up-posing_23-2149190725.jpg",
        },
        {
          id: "4",
          title: "Professionalism",
          quote: "I felt so comfortable the entire time. Very clean and professional atmosphere.",
          name: "Michael B.",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-tattoo-artist-drawing_23-2149525933.jpg",
        },
        {
          id: "5",
          title: "Stunning work",
          quote: "My custom piece turned out exactly as I envisioned. Absolutely love it!",
          name: "Jordan P.",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-portrait-beautiful-young-woman-posing-with-expressions_1301-6723.jpg",
        },
      ]}
      title="Client Love"
      description="Read what our customers are saying about their experience at our studio."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      members={[
        {
          id: "m1",
          name: "Artist Leo",
          role: "Tattoo Master",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-rebellious-granny-portrait_23-2151310002.jpg",
        },
        {
          id: "m2",
          name: "Artist Maya",
          role: "Custom Tattooist",
          imageSrc: "http://img.b2bpic.net/free-photo/expirienced-tattoo-artist-is-making-tattoo-attractive-young-woman-tattoo-salon_613910-5808.jpg",
        },
        {
          id: "m3",
          name: "Artist Sam",
          role: "Lead Piercer",
          imageSrc: "http://img.b2bpic.net/free-photo/redhead-non-binary-person-smiling_23-2148760583.jpg",
        },
      ]}
      title="Meet the Artists"
      description="Our talented team of artists is ready to help you express your creativity through high-quality body art."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Do I need an appointment?",
          content: "Yes, we recommend booking an appointment to ensure you get the time you need, but we welcome walk-ins when available.",
        },
        {
          id: "f2",
          title: "What should I bring?",
          content: "Please bring a valid photo ID and come well-rested and fed. Wear clothing that allows easy access to the area you're tattooing.",
        },
        {
          id: "f3",
          title: "How do I take care of my tattoo?",
          content: "We will provide you with full aftercare instructions, but essentially, keep it clean and moisturized.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know before your appointment."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get Inked Today"
      description="Send us your idea or questions, and we'll reach out to schedule your consultation."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your tattoo idea...",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/barber-equipment-working-surface-by-mirror-barbershop_627829-8282.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/hand-holding-notebook-with-drew-brand-logo-creative-design-ideas_53876-13985.jpg"
      logoText="Self-Ink-Flicted"
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Contact Info",
          items: [
            {
              label: "(970) 581-9517",
              href: "tel:9705819517",
            },
            {
              label: "151 S College Ave",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
