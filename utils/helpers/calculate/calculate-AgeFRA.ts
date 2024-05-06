function calculateFRA(birthdate: Date): Date {
  const birthYear = birthdate.getFullYear();
  let fra = new Date(birthdate);

  // FRA table based on birth year
  const fraTable: { [key: number]: number } = {
    1937: 65,
    1938: 65 + 2 / 12,
    1939: 65 + 4 / 12,
    1940: 65 + 6 / 12,
    1941: 65 + 8 / 12,
    1942: 65 + 10 / 12,
    1954: 66,
    1955: 66 + 2 / 12,
    1956: 66 + 4 / 12,
    1957: 66 + 6 / 12,
    1958: 66 + 8 / 12,
    1959: 66 + 10 / 12,
    1960: 67,
  };

  // Get FRA from table
  const fraYear = fraTable[birthYear] ?? 67;
  fra.setFullYear(
    birthYear + Math.floor(fraYear),
    birthdate.getMonth(),
    birthdate.getDate(),
  );
  return fra;
}
