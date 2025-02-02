// generic with interface
interface Developer<T> {
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
  IsEmployed: T;
}

interface isEmployed {
    company: string;
    salary: number;
};

const developer1: Developer<boolean> = {
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

const developer2: Developer<isEmployed> = {
    name: "Steve",
    computer: {
        processor: "AMD",
        memory: "8GB",
        storage: "512GB",
    },
    smartWatch: {
        brand: "Samsung",
        price: 300,
    },
    mobile: {
        brand: "Apple",
        price: 1200,
    },
    IsEmployed: { company: "Google", salary: 100000 },
    };