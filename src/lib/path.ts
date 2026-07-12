const BASE = "/iron-man-portfolio";

export function assetUrl(path: string) {
  if (path.startsWith(BASE)) return path;
  return `${BASE}${path}`;
}
