import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:border-none",
  {
    variants: {
      variant: {
        default:
          "border border-input hover:bg-secondary text-primary-foreground",
        destructive:
          "border border-input hover:bg-secondary text-primary-foreground",
        outline: "border border-input hover:bg-accent text-primary-foreground",
        secondary: "bg-secondary hover:bg-accent text-primary-foreground",

        ghost: "bg-muted text-muted-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-14 py-2 text-sm",
        sm: "h-16 w-16 lg:h-20 lg:w-20 rounded-lg text-3xl lg:text-4xl",
        lg: "px-8 py-3.5 rounded-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
