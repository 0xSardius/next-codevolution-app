"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Errorboundary({ error }: { error: Error }) {
  const router = useRouter();
  return (
    <div>
      <h1>{error.message} loading review</h1>
      <p>
        <button onClick={() => startTransition(() => router.refresh())}>
          Try again
        </button>
      </p>
    </div>
  );
}
