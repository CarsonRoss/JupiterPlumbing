export const site = {
  name: "Jupiter Plumbing",
  phone: {
    display: "(561) 746-4038",
    href: "tel:+15617464038",
  },
  email: {
    display: "service@jupiterplumbing.com",
    href: "mailto:service@jupiterplumbing.com",
  },
  address: {
    lines: ["16 Yacht Club Dr.", "Jupiter, FL 33477"],
  },
  hours: [
    { day: "Monday", hours: "08:00 AM - 4:30 PM" },
    { day: "Tuesday", hours: "08:00 AM - 4:30 PM" },
    { day: "Wednesday", hours: "08:00 AM - 4:30 PM" },
    { day: "Thursday", hours: "08:00 AM - 4:30 PM" },
    { day: "Friday", hours: "08:00 AM - 4:30 PM" },
    { day: "Saturday", hours: "Emergency Only" },
    { day: "Sunday", hours: "Emergency Only" },
  ],
  afterHoursNote: "Commercial after hour services please call 561-746-4038",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "Contact", href: "/contact" },
];

export const home = {
  hero: {
    eyebrow: "JUPITER PLUMBING",
    title: ["Commercial & Residential", "Plumbing Contractor"],
    blurb:
      "Founded in 1962, Jupiter Plumbing has consistently delivered exceptional service, combining decades of experience with time-honored traditions. Our team of certified professionals are dedicated to tackling everything from minor leaks to major installations!",
    ctas: [
      { label: "Call Us", href: site.phone.href, variant: "primary" as const },
      { label: "Learn More", href: "/services", variant: "secondary" as const },
    ],
    image: {
      src: "https://media-public.canva.com/MADGyMdbarA/4/screen_2x.jpg",
      alt: "Clear glass building",
    },
  },
  highlights: [
    {
      title: "Commercial Plumbing",
      description:
        "Our experienced team delivers top-notch commercial plumbing services, from routine maintenance and repairs to complex installations.",
      href: "/services",
    },
    {
      title: "Residential Plumbing",
      description:
        "Our skilled technicians provide comprehensive residential plumbing services, from fixing leaks and clogs to installing new fixtures and systems.",
      href: "/services",
    },
    {
      title: "Emergency Service",
      description:
        "When plumbing emergencies strike our expert team provides prompt services to tackle unexpected issues quickly and effectivley.",
      href: "/services",
    },
    {
      title: "Backflows",
      description:
        "Backflow prevention device works to prevent water flowing in the wrong direction, allowing contaminants to enter your clean water supply.",
      href: "/services",
    },
    {
      title: "Smart Water Valve",
      description:
        "Monitor for leaks right from your smartphone. If your insurance requires a smart valve, we’ll handle the installation quickly to help you meet your deadlines!",
      href: "https://shop.moen.com/pages/flo-smart-water-monitor",
      external: true,
    },
  ],
  whyChooseUs: {
    eyebrow: "WHY CHOOSE US?",
    title: ["Family Owned", "& Operated", "Since 1962!"],
    body:
      "At Jupiter Plumbing, we are more than just plumbers—we’re problem solvers, committed to delivering reliable, high-quality plumbing services to our community. We are family owned and operated with 62 years of experience. Our team of certified professionals are dedicated to tackling everything from minor leaks to major installations with precision and care.",
    cta: { label: "Discover More", href: "/about" },
    image: {
      src: "https://jupiterplumbing.com/wp-content/uploads/2024/08/2.png",
      alt: "About Jupiter Plumbing services",
    },
  },
  gallery: {
    // Put these files in: web/public/images/
    // Then update these paths (no "public" in the URL).
    items: [
      { src: "/images/gallery-1.jpg", alt: "Gallery image 1" },
      { src: "/images/gallery-2.jpg", alt: "Gallery image 2" },
      { src: "/images/gallery-3.jpg", alt: "Gallery image 3" },
      { src: "/images/gallery-4.jpg", alt: "Gallery image 4" },
    ],
  },
  serviceList: {
    title: "Our Commercial/Residential Service List",
    items: [
      {
        title: "Water Heaters",
        description:
          "We can provide regular maintenance, repairs, and replacements for residential and commercial water heaters.",
      },
      {
        title: "Commercial Boilers",
        description:
          "With a team of certified technicians and decades of industry experience, we provide expert maintenance, repair, and installation for commercial boilers.",
      },
      {
        title: "Pool Heaters",
        description:
          "Whether you need a new heater, routine maintenance, emergency repairs, or a complete system upgrade, our certified technicians will ensure your pool heater operates efficiently and reliably.",
      },
      {
        title: "Slab Leaks",
        description:
          "Our Slab Leak Detection and Repair service uses advanced technology to quickly locate leaks beneath your concrete slab. Our expert technicians then provide fast, effective repairs, minimizing disruption to your home or business.",
      },
      {
        title: "Storage & Expansion Tanks",
        description:
          "We provide installation, maintenance and repair for commercial and residential storage and expansion tanks!",
      },
      {
        title: "Sewer Pipe Video Inspections",
        description:
          "Using state-of-the-art video technology, our technicians can quickly and accurately diagnose blockages, cracks, or other issues within your sewer lines.",
      },
      {
        title: "Reroute Leaking Water Pipes",
        description:
          "Our team of certified technicians will work to reroute leaking pipes through walls and floors.",
      },
      {
        title: "Pump Repairs",
        description:
          "Whether it's a minor issue or a major breakdown, we diagnose and fix problems with precision, using high-quality parts and the latest techniques.",
      },
    ],
    cta: { label: "More Services", href: "/services" },
  },
  clients: {
    title: "Our Clients",
    cta: { label: "More Clients", href: "/our-clients" },
    logos: [
      {
        alt: "The Club at Admirals Cove",
        src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/1-2.png",
      },
      {
        alt: "Trump National Golf Club Jupiter",
        src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/14-1.png",
      },
      {
        alt: "Jupiter Medical Center",
        src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/6-1.png",
      },
      {
        alt: "Courtyard by Marriott",
        src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/3-1.png",
      },
      {
        alt: "Hilton Singer Island",
        src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/5-1.png",
      },
      {
        alt: "Town of Jupiter",
        src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/17.png",
      },
    ],
  },
  testimonials: {
    title: "What People Think About Us",
    cta: { label: "Leave A Review!", href: "https://g.page/r/CetNeoe4aqsIEAI/review" },
    items: [
      {
        name: "Charles F.",
        body:
          "We hired Jupiter Plumbing Services Inc to install the whole house water filtration system for us. The two plumbers worked together to complete the installation. They came out to our house on time and finished the job on schedule. The system is working as expected. They attended to our emails and phone calls either right away or within minutes. We strongly recommend this business to everyone.",
      },
      {
        name: "Robert M. Kozicki",
        title: "Manager of Plant Operations Jupiter Medical Center",
        body:
          "I wanted to take the time to express our gratitude to you and your entire team for dropping everything for our pump emergency the other night.",
      },
      {
        name: "Danielle & Crystal",
        body:
          "Danielle and Crystal were so friendly and helpful when we called for an emergency. Would definitely use them in the future!",
      },
    ],
  },
};

