interface ICardData {
  cell: string;
  dob: { age: number; date: string };
  email: string;
  gender: string;
  location: {
    city: string;
    coordinates: { latitude: string; longitude: string };
    postcode: number;
    state: string;
    street: string;
  };
  name: { first: string; last: string; title: string };
  picture: { medium: string };
  registered: { date: string };
}

interface IFilteredData {
  filteredData: ICardData[];
}

type EventInput = (e: React.ChangeEvent<HTMLInputElement>) => void;
type EventSelect = (e: React.ChangeEvent<HTMLSelectElement>) => void;