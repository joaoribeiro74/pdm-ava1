// services/helper.ts
import data from "../services/data";

export const groupPassengersByCountry = () => {
  const countryCount: { [key: string]: Set<number> } = {}; 

  data.forEach((passenger) => {
    const countries = [passenger.origin, passenger.destination];

    countries.forEach((country) => {
      if (!countryCount[country]) {
        countryCount[country] = new Set();
      }
      countryCount[country].add(passenger.id); 
    });
  });

  const formatPassengerCount = (count: number) => {
    return count === 1 ? 'passageiro' : 'passageiros';
  };

  const sections = Object.keys(countryCount).map((country) => ({
    title: `${country} (${countryCount[country].size} ${formatPassengerCount(countryCount[country].size)})`, 
    data: data.filter((passenger) =>
      passenger.origin === country || passenger.destination === country
    ),
  }));

  return sections.sort((a, b) => a.title.localeCompare(b.title));
};
