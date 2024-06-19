import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNestedProperty(obj: any, path: string) {
  const keys = path.split(".");
  let current = obj;

  for (let i = 0; i < keys.length; i++) {
    if (current[keys[i]] === undefined) {
      return undefined;
    } else {
      current = current[keys[i]];
    }
  }

  return current;
}
