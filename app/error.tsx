"use client";

import { useEffect } from "react";

import { reportLovableError } from "@/lib/lovable-error-reporting";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    reportLovableError(error, { boundary: "next_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl text-navy-deep">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={reset} className="btn-gold" type="button">
            Try again
          </button>
          <a href="/" className="btn-outline-gold">Go home</a>
        </div>
      </div>
    </div>
  );
}
