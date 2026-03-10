/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  const sizes = ["small", "medium", "large"];
  const types = ["regular", "latte", "cappuccino", "mocha"];

  if (!sizes.includes(size) || !types.includes(type)) {
    return -1;
  }

  let total = 0;

  switch (size) {
    case "small":
      total = total + 3;
      break;
    case "medium":
      total = total + 4;
      break;
    case "large":
      total = total + 5;
      break;
  }

  switch (type) {
    case "latte":
      total = total + 1;
      break;
    case "cappuccino":
      total = total + 1.5;
      break;
    case "mocha":
      total = total + 2;
      break;
  }

  const { whippedCream, extraShot } = extras;

  if (whippedCream) total += 0.5;
  if (extraShot) total += 0.75;

  return total;
}
