function* infiniteMaker() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

export let interator = infiniteMaker();
