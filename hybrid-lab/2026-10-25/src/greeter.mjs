export function greet(name) {
  if (typeof name !== "string" || !name.trim()) throw new TypeError("name is required");
  const normalized = name.trim().replace(/\s+/g, " ");
  return `Hello, ${normalized}!`;
}
