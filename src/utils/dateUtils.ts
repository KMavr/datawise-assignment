export const formatDate =
  (formatOptions: Intl.DateTimeFormatOptions) =>
  (date: Date): string =>
    date.toLocaleDateString('en-GB', formatOptions);

export function getCurrentTimeIn12HourFormat() {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return currentTime.toUpperCase();
}
