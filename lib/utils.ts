export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Builds a pre-filled wa.me link from a raw phone (digits only) and a message. */
export function buildWhatsAppLink(phoneRaw: string, message: string) {
  return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(message)}`;
}
