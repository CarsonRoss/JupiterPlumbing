import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

const posts = [
  {
    href: "/blog/professional-drain-cleaning-jupiter-florida",
    title: "Professional Drain Cleaning in Jupiter, Florida: Keep Your Plumbing Flowing Smoothly",
    date: "January 28, 2026",
    image: "https://jupiterplumbing.com/wp-content/uploads/2026/01/Blog-Banner-for-Website-Content-2.png",
    excerpt:
      "Clogged or slow drains can disrupt your daily routine and lead to costly plumbing problems if ignored. Learn why professional drain cleaning is the safest and most effective option.",
  },
  {
    href: "/blog/professional-leak-detection-jupiter-fl",
    title: "Professional Leak Detection in Jupiter, FL: Protect Your Home and Save Money",
    date: "January 28, 2026",
    image: "https://jupiterplumbing.com/wp-content/uploads/2026/01/Blog-Banner-for-Website-Content.png",
    excerpt:
      "Water leaks can cause serious damage, increase utility bills, and lead to mold growth if left untreated. Learn the signs of hidden leaks and why early detection matters.",
  },
];

export default function BlogIndexPage() {
  return (
    <PageShell>
      <section className="bg-white">
        <Container className="py-14">
          <SectionHeading eyebrow="BLOG" title="Latest posts" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group overflow-hidden rounded-brand bg-brand-background ring-1 ring-brand-accent/10"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold tracking-wide text-brand-accent/70">
                    {post.date}
                  </div>
                  <div className="mt-2 text-lg font-extrabold leading-snug text-brand-primary">
                    {post.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-brand-accent/80">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 text-sm font-bold text-brand-accent">
                    Read more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

