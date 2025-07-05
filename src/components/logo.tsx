import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";

export const Logo = (props: ComponentProps<"svg">) => (
  <svg
    fill="none"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={cn("fill-foreground", props.className)}
  >
    <path d="M512 208L408 208V421H512V208Z" />
    <path d="M104 43L0 43L1.86211e-05 256L104 256L104 43Z" />
    <path d="M0 0L256 75.786V181.195L0 105.409V0Z" />
    <path d="M0 165L256 240.786V346.195L0 270.409V165Z" />
    <path d="M0 330L256 405.786V511.195L0 435.409V330Z" />
    <path d="M256 511.195L512 435.409V330L256 405.786V511.195Z" />
    <path d="M256 346.195L512 270.409V165L256 240.786V346.195Z" />
    <path d="M256 181.195L512 105.409V0L256 75.786V181.195Z" />
  </svg>
);
