import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";

type Post = {
  title: string;
  date: string;
  image: string;
  sections: Array<{ heading?: string; body: string[]; bullets?: string[] }>;
};

const posts: Record<string, Post> = {
  "professional-leak-detection-jupiter-fl": {
    title:
      "Professional Leak Detection in Jupiter, FL: Protect Your Home and Save Money",
    date: "January 28, 2026",
    image:
      "https://jupiterplumbing.com/wp-content/uploads/2026/01/Blog-Banner-for-Website-Content.png",
    sections: [
      {
        body: [
          "Water leaks are more than just an inconvenience—they can cause serious damage to your home, increase utility bills, and lead to mold growth if left untreated. If you’re a homeowner or business owner in Jupiter, FL, fast and accurate leak detection is essential.",
        ],
      },
      {
        heading: "Why leak detection is so important in Jupiter, Florida",
        body: [
          "Jupiter’s warm climate, high humidity, and frequent rainfall create the perfect conditions for water-related issues. Slab foundations, aging plumbing systems, and irrigation lines are especially vulnerable to hidden leaks.",
        ],
        bullets: [
          "Higher water bills",
          "Structural damage to your home or business",
          "Mold and mildew growth",
          "Foundation and slab damage",
          "Landscape erosion",
        ],
      },
      {
        heading: "Common signs you may have a water leak",
        body: [
          "Not all leaks are obvious. Many are hidden behind walls, under floors, or beneath concrete slabs. Watch for these warning signs:",
        ],
        bullets: [
          "Unexplained spikes in your water bill",
          "The sound of running water when fixtures are off",
          "Damp spots on walls, ceilings, or floors",
          "Low water pressure",
          "Cracks in your foundation or driveway",
          "Moldy or musty odors",
          "Warm spots on floors (often linked to slab leaks)",
        ],
      },
      {
        heading: "Types of leak detection services",
        body: [
          "Professional leak detection companies use advanced, non-invasive technology to locate leaks quickly and accurately.",
        ],
        bullets: [
          "Slab leak detection",
          "Water line leak detection",
          "Pool leak detection",
          "Sewer and drain leak detection",
        ],
      },
    ],
  },
  "professional-drain-cleaning-jupiter-florida": {
    title:
      "Professional Drain Cleaning in Jupiter, Florida: Keep Your Plumbing Flowing Smoothly",
    date: "January 28, 2026",
    image:
      "https://jupiterplumbing.com/wp-content/uploads/2026/01/Blog-Banner-for-Website-Content-2.png",
    sections: [
      {
        body: [
          "Clogged or slow drains can quickly disrupt your daily routine and lead to costly plumbing problems if ignored. For homeowners and businesses in Jupiter, Florida, professional drain cleaning services are the safest and most effective way to keep plumbing systems running efficiently.",
        ],
      },
      {
        heading: "Signs you need professional drain cleaning",
        body: ["Not all clogs happen overnight. Watch for these warning signs:"],
        bullets: [
          "Slow drains",
          "Recurring clogs",
          "Gurgling sounds",
          "Foul odors",
          "Water backing up",
        ],
      },
      {
        heading: "Drain cleaning methods",
        body: [
          "Professional plumbers use advanced tools and techniques to clear clogs safely and effectively without damaging pipes.",
        ],
        bullets: ["Hydro jetting", "Drain snaking and augering", "Video camera inspection"],
      },
    ],
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <PageShell>
      <article className="bg-white">
        <Container className="py-14">
          <div className="text-xs font-bold tracking-wide text-brand-accent/70">
            {post.date}
          </div>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-primary">
            {post.title}
          </h1>

          <div className="relative mt-8 h-64 overflow-hidden rounded-brand ring-1 ring-brand-accent/10 sm:h-80">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>

          <div className="prose prose-slate mt-10 max-w-none">
            {post.sections.map((section, idx) => (
              <section key={idx} className="mt-8">
                {section.heading ? (
                  <h2 className="text-2xl font-extrabold text-brand-primary">
                    {section.heading}
                  </h2>
                ) : null}
                {section.body.map((p) => (
                  <p key={p} className="mt-3 text-sm leading-7 text-brand-accent/85">
                    {p}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 list-disc pl-5 text-sm text-brand-accent/85">
                    {section.bullets.map((b) => (
                      <li key={b} className="mt-1">
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </Container>
      </article>
    </PageShell>
  );
}

