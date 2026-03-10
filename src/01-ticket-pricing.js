/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here

  if (typeof age !== "number" || age < 0 || typeof isWeekend !== "boolean") {
    return -1;
  }
  const isChildren = age >= 0 && age <= 12 ? true : false;
  const isTeean = age >= 13 && age <= 17 ? true : false;
  const isAdult = age >= 18 && age <= 59 ? true : false;
  const isSeniors = age >= 60 ? true : false;

  const childrensTicketPrise = 8;
  const teensTicketPrise = 12;
  const adultsTicketPrise = 15;
  const senioursTicketPrise = 10;

  if (isChildren) {
    return isWeekend ? childrensTicketPrise + 3 : childrensTicketPrise;
  } else if (isTeean) {
    return isWeekend ? teensTicketPrise + 3 : teensTicketPrise;
  } else if (isAdult) {
    return isWeekend ? adultsTicketPrise + 3 : adultsTicketPrise;
  } else if (isSeniors) {
    return isWeekend ? senioursTicketPrise + 3 : senioursTicketPrise;
  }
}
