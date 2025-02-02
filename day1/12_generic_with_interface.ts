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
