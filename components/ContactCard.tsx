"use client";

import { Check, Copy, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

type ContactCardProps = {
  icon: "mail" | "telegram" | "phone" | "location";
  label: string;
  value: string;
  href: string;
  copyValue?: string;
};

const icons = {
  mail: Mail,
  telegram: MessageCircle,
  phone: Phone,
  location: MapPin
};

export function ContactCard({ icon: Icon, label, value, href, copyValue }: ContactCardProps) {
  const [copied, setCopied] = useState(false);
  const IconComponent = icons[Icon];

  async function copy() {
    if (!copyValue) return;
    await navigator.clipboard.writeText(copyValue);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="glass group rounded-[2rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-glow">
      <div className="mb-6 flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-cyan">
          <IconComponent size={20} />
        </span>
        {copyValue ? (
          <button
            type="button"
            onClick={copy}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:text-white"
            aria-label={`Copy ${label}`}
          >
            {copied ? <Check size={17} /> : <Copy size={17} />}
          </button>
        ) : null}
      </div>
      <p className="text-sm uppercase tracking-[0.28em] text-white/42">{label}</p>
      <a href={href} className="mt-3 block break-words text-lg font-semibold text-white transition group-hover:text-cyan">
        {value}
      </a>
    </div>
  );
}
