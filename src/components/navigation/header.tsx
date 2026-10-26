"use client";

import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import LocaleSwitcher from "@/components/local-switcher";
import { useMessages } from "next-intl";

type MenuItem = { name: string; href: string };

const Logo = () => (
  <>
    <Image
      src="/img/logo-dark.png"
      alt=""
      width={34}
      height={27}
      priority
      className="dark:hidden"
    />
    <Image
      src="/img/logo-light.png"
      alt=""
      width={34}
      height={27}
      priority
      className="hidden dark:block"
    />
  </>
);

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const messages = useMessages();
  const header = messages?.header as
    | {
        menu: { label: string; items: MenuItem[] };
        languageButton: { label: string };
        themeButton: { label: string };
      }
    | undefined;

  const items = header?.menu.items ?? [];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Roberto Jordán — home"
        >
          <Logo />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
            Roberto Jordán
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label={header?.menu.label} className="flex items-center gap-7">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 border-l border-border pl-5">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LocaleSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              className="inline-flex h-9 w-9 items-center justify-center border border-border transition-colors hover:border-foreground"
              aria-label={header?.menu.label}
            >
              <Menu className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent className="flex w-full max-w-sm flex-col justify-between">
              <div>
                <SheetHeader>
                  <SheetTitle className="label-mono text-left">
                    {header?.menu.label}
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-10 flex flex-col">
                  {items.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="border-b border-border py-5 font-display text-4xl tracking-tight transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-6">
                <span className="label-mono">{header?.themeButton.label}</span>
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
