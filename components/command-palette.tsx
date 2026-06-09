"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Home,
  Mail,
  Sparkles,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { startTransition, useEffect, useEffectEvent, useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { navigationItems, projects, siteConfig } from "@/lib/data";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleKeydown = useEffectEvent((event: KeyboardEvent) => {
    const isCommand = event.metaKey || event.ctrlKey;
    if (isCommand && event.key.toLowerCase() === "k") {
      event.preventDefault();
      setOpen((current) => !current);
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    const openPalette = () => setOpen(true);

    window.addEventListener("open-command-palette", openPalette);
    return () => window.removeEventListener("open-command-palette", openPalette);
  }, []);

  const navigateTo = (href: string) => {
    startTransition(() => {
      setOpen(false);
      router.push(href);
    });
  };

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Command palette</DialogTitle>
          <DialogDescription>
            Jump across sections, open case studies, or go straight to contact.
          </DialogDescription>
        </DialogHeader>

        <Command className="mt-4 rounded-none border-t border-white/8">
          <CommandInput placeholder="Search sections, projects, or actions..." />
          <CommandList>
            <CommandEmpty>No matching destination found.</CommandEmpty>

            <CommandGroup heading="Sections">
              {navigationItems.map((item) => {
                const href = pathname === "/" ? `/#${item.id}` : `/#${item.id}`;
                return (
                  <CommandItem key={item.id} onSelect={() => navigateTo(href)}>
                    <span className="flex items-center gap-3">
                      <Home className="size-4 text-white/40" />
                      {item.label}
                    </span>
                    <ArrowRight className="size-4 text-white/30" />
                  </CommandItem>
                );
              })}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Projects">
              {projects.map((project) => (
                <CommandItem
                  key={project.slug}
                  onSelect={() => navigateTo(`/projects/${project.slug}`)}
                >
                  <span className="flex items-center gap-3">
                    <BriefcaseBusiness className="size-4 text-white/40" />
                    {project.name}
                  </span>
                  <ArrowRight className="size-4 text-white/30" />
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Actions">
              <CommandItem onSelect={() => navigateTo("/#contact")}>
                <span className="flex items-center gap-3">
                  <Mail className="size-4 text-white/40" />
                  Contact Rana
                </span>
                <ArrowRight className="size-4 text-white/30" />
              </CommandItem>
              <CommandItem onSelect={() => navigateTo(siteConfig.resumePath)}>
                <span className="flex items-center gap-3">
                  <Sparkles className="size-4 text-white/40" />
                  Download resume
                </span>
                <ArrowRight className="size-4 text-white/30" />
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  window.open(siteConfig.github, "_blank", "noopener,noreferrer");
                }}
              >
                <span className="flex items-center gap-3">
                  <Sparkles className="size-4 text-white/40" />
                  Open GitHub
                </span>
                <ArrowRight className="size-4 text-white/30" />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
