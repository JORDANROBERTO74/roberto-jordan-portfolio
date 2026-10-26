"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import LocalSwitcher from "@/components/local-switcher";
import { useMessages } from "next-intl";
import Image from "next/image";

const Logo = ({ width, height }: { width: number; height: number }) => (
  <>
    <Image
      src="/img/logo-dark.png"
      alt=""
      width={width}
      height={height}
      priority
      className="dark:hidden"
    />
    <Image
      src="/img/logo-light.png"
      alt=""
      width={width}
      height={height}
      priority
      className="hidden dark:block"
    />
  </>
);

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const messages = useMessages();
  const object: any = messages?.header;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="border-b border-border">
      <div className="hidden md:flex max-w-6xl mx-auto px-4 py-4 justify-between items-center">
        <Link href="/" aria-label="Roberto Jordán — home">
          <Logo width={48} height={38} />
        </Link>
        <div className="flex items-center justify-end gap-6 w-full">
          <nav
            aria-label={object?.menu?.label}
            className="flex items-center gap-6 w-full max-w-fit"
          >
            {object?.menu?.items?.map((item: any) => (
              <Link
                key={item.href}
                href={item.href}
                className={`w-fit text-sm hover:underline hover:text-muted-foreground ${
                  isActive(item.href) ? "text-muted-foreground" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 w-full max-w-fit">
            <div className="w-full">
              <ThemeToggle variant="ghost" />
            </div>
            <div className="w-full">
              <LocalSwitcher />
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden max-w-6xl mx-auto px-4 py-4 justify-between items-center">
        <Link href="/" aria-label="Roberto Jordán — home">
          <Logo width={40} height={32} />
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label={object?.menu?.label}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-4 justify-between">
            <div>
              <SheetHeader>
                <SheetTitle>{object?.menu?.label}</SheetTitle>
                <SheetDescription />
              </SheetHeader>
              {object?.menu?.items?.map((item: any, index: number) => (
                <SheetClose key={item.href} asChild>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`grid gap-4 py-2 w-full text-md font-medium text-center hover:text-muted-foreground ${
                      isActive(item.href) ? "text-muted-foreground" : ""
                    }`}
                  >
                    <span>{item?.name}</span>
                    {index !== 0 && <Separator />}
                  </Link>
                </SheetClose>
              ))}
            </div>
            <SheetFooter>
              <div className="flex justify-between items-center">
                <ThemeToggle variant="outline" />
                <div>
                  <LocalSwitcher />
                </div>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
