function* generator() {
  yield 1;
  yield* anotherGenerator();
  // ako stavimo ovde return "nesto"; tu ce se prekinuti, nece izvrsiti yield 3;
  yield 3;
}

function* anotherGenerator() {
  yield 2;
}

export const anotherGeneratorInterator = generator();
