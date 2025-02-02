// generic with interface
interface Developer {
  name: string;
  computer: {
    processor: string;
    memory: string;
    storage: string;
  };
  smartWatch: {
    brand: string;
    price: number;
  };
  mobile: {
    brand: string;
    price: number;
  };
  IsEmployed: boolean;
}

const developer1: Developer = {
  name: "John",
  computer: {
    processor: "Intel",
    memory: "16GB",
    storage: "1TB",
  },
  smartWatch: {
    brand: "Apple",
    price: 500,
  },
  mobile: {
    brand: "Samsung",
    price: 1000,
  },
  IsEmployed: true,
};

interface Developer2<T, U, V, W, X> {
  name: T;
  computer: U;
  smartWatch: V;
  mobile: W;
  IsEmployed: X;
}

const developer2: Developer2<
  string,
  { processor: string; memory: string; storage: string },
  { brand: string; price: number },
  { brand: string; price: number },
  boolean
> = {
  name: "Steve",
  computer: {
    processor: "AMD",
    memory: "8GB",
    storage: "512GB",
  },
  smartWatch: {
    brand: "Samsung",
    price: 400,
  },
  mobile: {
    brand: "Apple",
    price: 1200,
  },
  IsEmployed: false,
};
