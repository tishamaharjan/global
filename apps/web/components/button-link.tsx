"use client";

import { forwardRef } from "react";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";

interface ButtonLinkProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  href: string;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

const ButtonLink = forwardRef<HTMLButtonElement, ButtonLinkProps>(
  ({ href, showArrow = false, className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        asChild
        className={cn(
          "relative group overflow-hidden transition-all duration-300",
          className
        )}
        {...props}
      >
        <Link href={href} className="flex items-center gap-2">
          {children}
          {showArrow && (
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          )}
        </Link>
      </Button>
    );
  }
);
ButtonLink.displayName = "ButtonLink";

export { ButtonLink };
