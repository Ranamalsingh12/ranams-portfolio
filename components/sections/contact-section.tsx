"use client";

import { startTransition, useDeferredValue, useMemo, useState } from "react";
import { BriefcaseBusiness, Clock3, GitBranch, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Tell me who you are."),
  email: z.email("Use a valid email address."),
  message: z.string().min(24, "Give me a little more context."),
});

type ContactForm = z.infer<typeof contactSchema>;

const initialForm: ContactForm = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [sent, setSent] = useState(false);
  const deferredMessage = useDeferredValue(form.message);

  const remainingCharacters = useMemo(
    () => Math.max(0, 560 - deferredMessage.length),
    [deferredMessage],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = contactSchema.safeParse(form);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }

    setErrors({});

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    startTransition(() => {
      setSent(true);
      setForm(initialForm);
    });

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-shell" id="contact">
      <SectionHeading
        description="Whether it’s a product role, a startup collaboration, or a frontend-heavy challenge that needs ownership, I’m happy to talk."
        eyebrow="Contact"
        title="Let’s build something high-leverage together."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-7">
          <p className="text-xs uppercase tracking-[0.24em] text-white/38">
            Direct lines
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                icon: Mail,
                title: siteConfig.email,
                subtitle: "Best for project and role conversations",
                href: `mailto:${siteConfig.email}`,
              },
              {
                icon: BriefcaseBusiness,
                title: "LinkedIn profile",
                subtitle: "Professional background and experience",
                href: siteConfig.linkedin,
              },
              {
                icon: GitBranch,
                title: "GitHub repositories",
                subtitle: "Projects, prototypes, and code samples",
                href: siteConfig.github,
              },
              {
                icon: Send,
                title: "X / Twitter",
                subtitle: "Builder updates and ecosystem conversations",
                href: siteConfig.twitter,
              },
            ].map((item) => (
              <Link
                className="flex items-center justify-between gap-4 rounded-[24px] border border-white/8 bg-slate-950/70 px-4 py-4 transition hover:border-white/16 hover:bg-white/[0.05]"
                href={item.href}
                key={item.title}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-white/[0.05] text-white/80">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-white/48">{item.subtitle}</p>
                  </div>
                </div>
                <Send className="size-4 text-white/30" />
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
              <div className="flex items-center gap-3">
                <Clock3 className="size-4 text-sky-200" />
                <p className="text-sm text-white/72">Replies quickly when aligned</p>
              </div>
            </div>
            <div className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-sky-200" />
                <p className="text-sm text-white/72">{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </div>

        <form
          className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(255,255,255,0.03))] p-7"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.24em] text-white/38">
              Send a message
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
              This form validates inline and prepares an email draft in your mail
              client so the conversation can start immediately.
            </p>
          </div>

          <div className="grid gap-4">
            <div>
              <Input
                onChange={(event) =>
                  setForm((current) => ({ ...current, name: event.target.value }))
                }
                placeholder="Your name"
                value={form.name}
              />
              {errors.name ? (
                <p className="mt-2 text-sm text-rose-300">{errors.name}</p>
              ) : null}
            </div>
            <div>
              <Input
                onChange={(event) =>
                  setForm((current) => ({ ...current, email: event.target.value }))
                }
                placeholder="Email address"
                type="email"
                value={form.email}
              />
              {errors.email ? (
                <p className="mt-2 text-sm text-rose-300">{errors.email}</p>
              ) : null}
            </div>
            <div>
              <Textarea
                maxLength={560}
                onChange={(event) =>
                  setForm((current) => ({ ...current, message: event.target.value }))
                }
                placeholder="Tell me what you're building, what role you're hiring for, or where you need help."
                value={form.message}
              />
              <div className="mt-2 flex items-center justify-between gap-3">
                {errors.message ? (
                  <p className="text-sm text-rose-300">{errors.message}</p>
                ) : (
                  <p className="text-sm text-white/40">
                    Strong messages usually include scope, timeline, and context.
                  </p>
                )}
                <span className="text-xs text-white/38">
                  {remainingCharacters} chars left
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button size="lg" type="submit">
              Send message
              <Send className="size-4" />
            </Button>
            {sent ? (
              <p className="text-sm text-emerald-200">
                Draft prepared. Your email client should open with the message.
              </p>
            ) : (
              <p className="text-sm text-white/42">
                Prefer direct email? {siteConfig.email}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
