// services/helper.ts
import data from "../services/data";

export const groupPassengersByCountry = () => {
  // Usamos um objeto para acumular os países
  const countryCount: { [key: string]: Set<number> } = {}; // Um Set para garantir passageiros únicos

  // Iteramos sobre os dados dos passageiros
  data.forEach((passenger) => {
    const countries = [passenger.origin, passenger.destination];

    countries.forEach((country) => {
      if (!countryCount[country]) {
        countryCount[country] = new Set();
      }
      countryCount[country].add(passenger.id); // Adicionamos o ID do passageiro para contar apenas uma vez
    });
  });

  const formatPassengerCount = (count: number) => {
    return count === 1 ? 'passageiro' : 'passageiros';
  };

  // Transformamos o objeto em um array de seções, incluindo a contagem de passageiros
  const sections = Object.keys(countryCount).map((country) => ({
    title: `${country} (${countryCount[country].size} ${formatPassengerCount(countryCount[country].size)})`, // Título da seção com a contagem
    data: data.filter((passenger) =>
      // Filtra os passageiros que passaram pelo país
      passenger.origin === country || passenger.destination === country
    ),
  }));

  // Ordenar as seções alfabeticamente com base no nome do país
  return sections.sort((a, b) => a.title.localeCompare(b.title));
};
