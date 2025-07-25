import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges Tailwind classes intelligently.
 * @param inputs Any number of class name values.
 * @returns A single merged className string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}
