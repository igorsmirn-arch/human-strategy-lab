import type { Metadata } from "next";
import { EventBoard } from "@/components/EventBoard";

export const metadata: Metadata = {
  title: "Events | Human Strategy Lab",
  description: "Upcoming film club meetings, therapy groups, workshops and wellbeing activities by Igor Smirnov in Wrocław and online.",
  alternates: {
    canonical: "/events"
  }
};

export default function EventsPage() {
  return <EventBoard />;
}
