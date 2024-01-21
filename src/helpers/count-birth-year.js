export const countBirthYear = (birthDateString) => {
  const currentDate = new Date();
  const birthDate = new Date(birthDateString);

  const timeDifference = currentDate - birthDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365.25);

  return years;
};
