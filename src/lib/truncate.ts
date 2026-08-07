export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const cut = text.lastIndexOf(" ", maxLength);
  return cut > 0 ? text.slice(0, cut) : text.slice(0, maxLength);
}
