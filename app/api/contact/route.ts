import { NextResponse } from "next/server";
import { site } from "@/data/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { ok: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { ok: false, error: "Valid email is required." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || !subject.trim()) {
      return NextResponse.json(
        { ok: false, error: "Subject is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { ok: false, error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // Check if an external provider endpoint is configured in environment variables
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

    if (formspreeEndpoint) {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }),
      });

      if (response.ok) {
        return NextResponse.json({
          ok: true,
          message: "Message dispatched successfully via configured provider.",
        });
      }
    }

    // If no external secret/endpoint is configured in environment,
    // generate a prefilled direct mailto URL so the client sends it reliably.
    const directMailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject.trim()}`
    )}&body=${encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    )}`;

    return NextResponse.json({
      ok: false,
      fallbackMailto: true,
      mailtoUrl: directMailto,
      message:
        "No email service provider configured in environment. Redirecting to direct email.",
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Failed to process request." },
      { status: 500 }
    );
  }
}
