import type { Metadata } from "next";
import { BusinessGroupLanding } from "@/components/BusinessGroupLanding";

export const metadata: Metadata = {
  title: "Business Therapy Group | Igor Smirnov",
  description: "A therapy-informed group for entrepreneurs, leaders and specialists working with stress, burnout, responsibility and impostor syndrome.",
  alternates: {
    canonical: "/business-group"
  },
  openGraph: {
    title: "Business Therapy Group | Igor Smirnov",
    description: "A therapy-informed group for entrepreneurs, leaders and specialists working with stress, burnout, responsibility and impostor syndrome.",
    url: "/business-group",
    images: ["/images/igor-smirnov.jpeg"]
  }
};

export default function BusinessGroupPage() {
  return <BusinessGroupLanding />;
}
