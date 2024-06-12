import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-input hover:bg-secondary text-primary-foreground",
        destructive:
          "border border-input hover:bg-secondary text-primary-foreground text-xs md:text-base",
        outline:
          "border border-input text-primary-foreground hover:bg-accent hover:border-accent", // Consistent border
        secondary:
          "bg-secondary rounded-lg hover:bg-accent text-primary-foreground",
        ghost: "bg-muted text-muted-foreground rounded-lg",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 px-10 py-2 text-xs",
        sm: "h-11 w-11 md:w-12 md:h-12 lg:h-14 lg:w-14 rounded-lg text-xl lg:text-3xl",
        lg: "px-4 py-3 md:px-7 md:py-2.5 rounded-xl",
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
