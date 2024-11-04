// This file could possibly be moved in a more central place, if other date utils exist in the app.

export const formatDate =
  (formatOptions: Intl.DateTimeFormatOptions) =>
  (date: Date): string =>
    date.toLocaleDateString('en-GB', formatOptions);
