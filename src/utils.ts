export const isEmpty = (value: object): boolean => {
  return !(value && Object.keys(value).length);
};

export const postFakeRequest = (data: any) =>
  new Promise((res) => setTimeout(() => res(data), 500));

export function* idGenerator() {
  let i = 1;
  while (true) {
    yield i;
    i++;
  }
}
