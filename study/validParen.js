// this one is my solution
/**
 * @param {string} s
 * @return {boolean}
 */
const validParen = (s) => {
  if (s.length === 0 || s.length === 1) return false;

  const stack = [];

  const bracketMatch = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  s.split("").forEach((char) => {
    const topCharInStack = stack[stack.length - 1];

    if (bracketMatch[char]) {
      stack.push(char);
    } else if (bracketMatch[topCharInStack] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  });

  return stack.length === 0;
};
