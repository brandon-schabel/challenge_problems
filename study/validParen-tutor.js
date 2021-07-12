const isValid = (s) => {
  const stack = [];

  const hash = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let char of s) {
    if (hash[char] !== undefined) {
      stack.push(char);
    } else {
      const pop = stack.pop;
      if (hash[pop] !== char) return false;
    }
  }

  return stack.length === 0;
};

const test = "()[]{}";
