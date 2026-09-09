type ClassValue = string | false | null | undefined;

/** Tiny class-name joiner — keeps the bundle free of an extra dependency. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
