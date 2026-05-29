import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Human Strategy Lab",
  description: "Privacy policy for Human Strategy Lab by Igor Smirnov Consulting."
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-5 py-24 text-white lg:px-8">
      <Link href="/" className="text-sm text-cyan">Back to home</Link>
      <h1 className="mt-8 font-display text-5xl font-semibold tracking-tight">Privacy Policy</h1>
      <div className="mt-8 space-y-6 leading-8 text-white/68">
        <p>Human Strategy Lab collects only the information needed to respond to inquiries, schedule consultations and provide consulting, coaching, personal development and educational services.</p>
        <p>Contact details may include name, email, phone number, Telegram handle, scheduling details and payment confirmation data from Stripe or Calendly.</p>
        <p>Payments are processed by Stripe. Booking is supported by Calendly. These providers process data according to their own privacy and security policies.</p>
        <p>To request deletion, correction or access to your data, contact contact@igorsmirnovconsulting.com.</p>
        <p>This policy is a placeholder and should be reviewed by a qualified legal advisor before public launch.</p>
      </div>
    </main>
  );
}
