export function normalizeCategory(cat = "") {
  return cat
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/_/g, "-");
}
