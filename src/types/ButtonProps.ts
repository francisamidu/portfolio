import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { JSX } from "solid-js";

export interface ButtonProps
  extends JSX.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text: string;
  icon?: JSX.Element;
}
