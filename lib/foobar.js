const fooBarize = (num) => {
  const isMultipleOfThree = num % 3 === 0;
  const isMultipleOfFive = num % 5 === 0;

  if (isMultipleOfThree && isMultipleOfFive) return "FooBar";
  if (isMultipleOfThree) return "Foo";
  if (isMultipleOfFive) return "Bar";

  return num.toString();
};

const fooBar = (length) =>
  Array.from({ length }, (_, i) => i + 1)
    .map(fooBarize)
    .join("\n");

module.exports = fooBar;
module.exports.fooBarize = fooBarize;
