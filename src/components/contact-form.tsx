"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocale, useTranslations } from "next-intl";
import { sendContactForm } from "@/lib/sendContactForm";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const locale = useLocale();
  const t = useTranslations("contactForm");
  const { toast } = useToast();

  const schema = React.useMemo(
    () =>
      z.object({
        name: z
          .string()
          .trim()
          .min(2, { message: t("validation.name") })
          .max(80, { message: t("validation.name") }),
        email: z.string().trim().email({ message: t("validation.email") }),
        subject: z
          .string()
          .trim()
          .min(3, { message: t("validation.subject") })
          .max(120, { message: t("validation.subject") }),
        message: z
          .string()
          .trim()
          .min(20, { message: t("validation.message") })
          .max(2000, { message: t("validation.message") }),
      }),
    [t],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const response = await sendContactForm({
        ...values,
        time: new Intl.DateTimeFormat(locale, {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(new Date()),
      });

      if (response.status !== 200) {
        throw new Error(`EmailJS responded with ${response.status}`);
      }

      reset();
      toast({
        title: t("success.title"),
        description: t("success.subtitle"),
      });
    } catch {
      toast({
        title: t("error.title"),
        description: t("error.subtitle"),
        variant: "destructive",
      });
    }
  };

  const fieldClass =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground focus:ring-0";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-7"
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="label-mono">
            {t("form.name.label")}
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder={t("form.name.placeholder")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="label-mono">
            {t("form.email.label")}
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder={t("form.email.placeholder")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
            {...register("email")}
          />
          {errors.email && (
            <p
              id="email-error"
              role="alert"
              className="text-xs text-destructive"
            >
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="label-mono">
          {t("form.subject.label")}
        </label>
        <input
          id="subject"
          type="text"
          placeholder={t("form.subject.placeholder")}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={fieldClass}
          {...register("subject")}
        />
        {errors.subject && (
          <p
            id="subject-error"
            role="alert"
            className="text-xs text-destructive"
          >
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="label-mono">
          {t("form.message.label")}
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder={t("form.message.placeholder")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass} resize-y`}
          {...register("message")}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="text-xs text-destructive"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 items-center justify-center gap-2 bg-primary px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Mail className="h-4 w-4" aria-hidden />
          {isSubmitting ? t("form.sending") : t("form.sendButton.label")}
        </button>
      </div>
    </form>
  );
}
