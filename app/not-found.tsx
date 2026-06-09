import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4">
      <div className="max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-white/40">404</p>
        <h1 className="mt-4 font-[family:var(--font-sora)] text-5xl font-semibold text-white">
          That page drifted out of orbit.
        </h1>
        <p className="mt-4 text-lg leading-8 text-white/62">
          The case study or section you asked for doesn&apos;t exist yet.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
