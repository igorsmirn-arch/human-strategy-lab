import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Human Strategy Lab",
  description: "Terms and conditions for Human Strategy Lab by Igor Smirnov Consulting."
};

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-5 py-24 text-white lg:px-8">
      <Link href="/" className="text-sm text-cyan">Back to home</Link>
      <h1 className="mt-8 font-display text-5xl font-semibold tracking-tight">Terms & Conditions</h1>
      <div className="mt-8 space-y-6 leading-8 text-white/68">
        <p>Human Strategy Lab provides consulting, coaching, relationship consulting, personal development and educational services. The services are not positioned as medical, psychiatric or emergency care.</p>
        <p>Appointments may be delivered online or in person in Wrocław, Poland. Session details are confirmed by email, Calendly or direct communication.</p>
        <p>Refund policy: if a paid session cannot take place, contact us before the scheduled time to discuss rescheduling or a refund review. Refunds are assessed case by case and may be processed through Stripe.</p>
        <p>Cancellation policy: please cancel or reschedule at least 24 hours before the appointment whenever possible. Late cancellations may be treated as completed sessions.</p>
        <p>For questions, contact contact@igorsmirnovconsulting.com or +48 572 090 774.</p>
        <p>These terms are placeholders and should be reviewed by a qualified legal advisor before public launch.</p>
      </div>
    </main>
  );
}
