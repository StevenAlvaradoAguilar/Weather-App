/** @format */

export function getDayOrNightIcon(
  iconname: string,
  dateTimeString: string
): string {
  const hours = new Date(dateTimeString).getHours(); // Get hours from given date and time

  const isDayTime = hours >= 6 && hours < 18; // Consider daytime from 6 am to 6 pm

  return isDayTime ? iconname.replace(/.$/, "d") : iconname.replace(/.$/, "n");
}