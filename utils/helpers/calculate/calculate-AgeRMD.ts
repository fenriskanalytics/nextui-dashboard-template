function calculateRMDStartDate(
  birthdate: Date,
  isRetired: boolean = false,
): Date {
  const birthYear = birthdate.getFullYear();
  const rmdAge = 72; // RMD age is 72 for all retirement accounts
  const startDate = new Date(birthdate);

  // Calculate the year when RMDs should start
  let rmdYear = birthYear + rmdAge;
  const cutoffYear = 2022;
  if (rmdYear > cutoffYear) {
    rmdYear++; // Increment by 1 if birth year + RMD age is after the cutoff year
  }

  // If not retired and past RMD age, adjust RMD start date
  if (!isRetired && new Date().getFullYear() >= rmdYear) {
    startDate.setFullYear(new Date().getFullYear(), 3, 1); // Start RMDs on April 1 of the current year
  } else {
    startDate.setFullYear(rmdYear, 3, 1); // Start RMDs on April 1 of the RMD year
  }

  return startDate;
}
