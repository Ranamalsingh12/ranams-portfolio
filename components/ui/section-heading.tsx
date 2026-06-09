import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      <Badge>{eyebrow}</Badge>
      <div className="space-y-3">
        <h2 className="max-w-3xl font-[family:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
