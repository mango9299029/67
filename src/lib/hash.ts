export function hashStr(str: string): string {
  let h = 5381;
  const s = String(str);
  for (let i = 0; i < s.length; i++) {
    h = ((h * 33) ^ s.charCodeAt(i)) >>> 0;
  }
  return "h" + h.toString(36);
}

export const DEFAULT_PASS_HASH = "hsi3usn";
