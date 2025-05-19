/**
 * Combines multiple class names into a single string, filtering out falsy values.
 * This is a utility function for conditionally applying class names.
 *
 * @param {...string} classes - The class names to combine
 * @returns {string} - The combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}
