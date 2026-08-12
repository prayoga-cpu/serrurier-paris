/**
 * Which zones actually border which. Used for the "nearby areas" block, which
 * exists for two reasons: a visitor on the wrong arrondissement page is one
 * click from the right one, and real adjacency spreads internal link equity the
 * way a crawler expects a local site to be shaped.
 *
 * Numeric proximity would have been cheaper and wrong — the 1st doesn't border
 * the 20th, and Créteil isn't next to Versailles.
 */
export const PARIS_ADJACENCY: Record<string, string[]> = {
  "1": ["2", "3", "4", "6", "7", "8"],
  "2": ["1", "3", "9", "10"],
  "3": ["1", "2", "4", "10", "11"],
  "4": ["1", "3", "5", "11", "12"],
  "5": ["4", "6", "13"],
  "6": ["5", "7", "14", "15"],
  "7": ["6", "8", "15", "16"],
  "8": ["1", "2", "7", "9", "16", "17"],
  "9": ["2", "8", "10", "18"],
  "10": ["2", "3", "9", "11", "18", "19"],
  "11": ["3", "4", "10", "12", "20"],
  "12": ["4", "11", "13", "20"],
  "13": ["5", "12", "14"],
  "14": ["5", "6", "13", "15"],
  "15": ["6", "7", "14", "16"],
  "16": ["7", "8", "15", "17"],
  "17": ["8", "9", "16", "18"],
  "18": ["9", "10", "17", "19"],
  "19": ["10", "18", "20"],
  "20": ["11", "12", "19"],
};

/** Department code → the department codes it borders (Paris excluded, it's implicit). */
export const DEPARTMENT_ADJACENCY: Record<string, string[]> = {
  "92": ["78", "91", "93", "94", "95"],
  "93": ["77", "92", "94", "95"],
  "94": ["77", "91", "92", "93"],
  "91": ["77", "78", "92", "94"],
  "78": ["91", "92", "95"],
  "95": ["78", "92", "93", "77"],
  "77": ["91", "93", "94", "95"],
};
