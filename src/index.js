module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

  const openBrackets = [];
  const sameBrackets = [];
  bracketsConfig.map(item => (item[0] !== item[1]) ? openBrackets.push(item[0]) : sameBrackets.push(item[0]));

  const bracketsPair = {};
  const counter = {};
  bracketsConfig.map(item => {
    bracketsPair[item[1]] = item[0];
    if (item[0] === item[1]) counter[item[0]] = 0 });

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else if (sameBrackets.includes(currentSymbol) && counter[currentSymbol] % 2 == 0) {
      stack.push(currentSymbol);
      counter[currentSymbol]++;
    } else {
      if (stack.length === 0) return false;

      let lastElement = stack.at(-1);

      if ((bracketsPair[currentSymbol] === lastElement) && (sameBrackets.includes(currentSymbol))) {
        stack.pop();
        counter[currentSymbol]++;
      } else if (bracketsPair[currentSymbol] === lastElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
