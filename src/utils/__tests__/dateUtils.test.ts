import { describe, it, expect, vi } from 'vitest';
import { formatDate, getCurrentTimeIn12HourFormat } from '../dateUtils';

describe('dateUtils', () => {
  describe('formatDate', () => {
    it('should format the date according to the provided format options', () => {
      const testDate = new Date('2024-11-06T12:00:00Z');
      const formatOptions: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };

      const formattedDate = formatDate(formatOptions)(testDate);

      expect(formattedDate).toBe('Wed, 6 November 2024');
    });
  });

  describe('getCurrentTimeIn12HourFormat', () => {
    it('should return the current time in 12-hour format with uppercase AM/PM', () => {
      const testTime = new Date('2024-11-06T15:45:00');
      vi.setSystemTime(testTime);

      const currentTime = getCurrentTimeIn12HourFormat();
      expect(currentTime).toBe('3:45 PM');
    });

    it('should handle midnight correctly', () => {
      const midnight = new Date('2024-11-06T00:00:00');
      vi.setSystemTime(midnight);

      const currentTime = getCurrentTimeIn12HourFormat();

      expect(currentTime).toBe('12:00 AM');
    });

    it('should handle noon correctly', () => {
      const noon = new Date('2024-11-06T12:00:00');
      vi.setSystemTime(noon);

      const currentTime = getCurrentTimeIn12HourFormat();
      expect(currentTime).toBe('12:00 PM');
    });
  });
});
