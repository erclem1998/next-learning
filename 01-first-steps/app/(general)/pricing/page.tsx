import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Description',
  keywords: ['Erick Lemus', 'pricing', 'nextjs', 'react', 'typescript'],
};

export default function PricingPage() {
  return (
    <span className="text-7xl">Pricing Page</span>
  );
}