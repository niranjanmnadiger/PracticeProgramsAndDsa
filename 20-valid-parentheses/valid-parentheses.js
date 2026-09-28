/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const closingFor = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  for (const char of s) {
    if (closingFor[char]) {
      stack.push(closingFor[char]);
    } else if (stack.pop() !== char) {
      return false;
    }
  }

  return stack.length === 0;
}