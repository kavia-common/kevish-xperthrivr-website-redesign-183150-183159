"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Alert from "@/components/ui/Alert";

export default function ContactForm() {
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const errors = {
    name: values.name.trim().length < 2 ? "Please enter your full name." : "",
    email: !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email) ? "Please enter a valid email." : "",
    message: values.message.trim().length < 10 ? "Please enter at least 10 characters." : "",
  };

  const update =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
    };

  const markTouched = (key: keyof typeof values) => () => setTouched((t) => ({ ...t, [key]: true }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side only: no network calls; show a placeholder alert
    alert("Thanks! This is a placeholder—no data was sent.");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <Alert title="No backend connected" variant="info">
        This form validates locally. Submissions are not sent anywhere.
      </Alert>

      <Input
        label="Name"
        name="name"
        placeholder="Jane Doe"
        value={values.name}
        onChange={update("name")}
        onBlur={markTouched("name")}
        error={touched.name ? errors.name : ""}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="you@example.com"
        value={values.email}
        onChange={update("email")}
        onBlur={markTouched("email")}
        error={touched.email ? errors.email : ""}
        required
      />
      <Textarea
        label="Message"
        name="message"
        rows={5}
        placeholder="How can we help?"
        value={values.message}
        onChange={update("message")}
        onBlur={markTouched("message")}
        error={touched.message ? errors.message : ""}
        required
      />

      <div className="pt-2">
        <Button type="submit" variant="primary">
          Send message
        </Button>
      </div>
    </form>
  );
}
