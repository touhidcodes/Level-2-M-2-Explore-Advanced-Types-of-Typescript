{
  // Generic Interface
  interface Developer<T, X = null> {
    // set default value in params
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface Watch1 {
    brand: string;
    model: string;
    display: string;
  }

  const developer1: Developer<Watch1> = {
    name: "touhid",
    computer: {
      brand: "Fujitsu",
      model: "Lifebook T34",
      releaseYear: 2017,
    },
    smartWatch: {
      brand: "Apple",
      model: "I watch A2",
      display: "OLED",
    },
  };

  interface Watch2 {
    brand: string;
    model: string;
    heartRateTrack: boolean;
    sleepTrack: boolean;
  }

  interface Bike2 {
    brand: string;
    model: string;
  }

  const developer2: Developer<Watch2, Bike2> = {
    name: "Munna",
    computer: {
      brand: "HP",
      model: "Xr-55",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Samsung",
      model: " A2",
      heartRateTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Yahamah",
      model: "RX",
    },
  };
  //
}
