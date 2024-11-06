import { describe, it, expect } from 'vitest';
import { distanceFormatter } from '../activitiesUtils.ts';

describe('activitiesUtils', () => {
  describe('distanceFormatter', () => {
    it('should format the distance to kilometers if it is more than 1000', () => {
      const distance = distanceFormatter(2000);
      expect(distance).toBe('2km');
    });

    it('should format the distance to meters if it is less than 1000', () => {
      const distance = distanceFormatter(200);
      expect(distance).toBe('200m');
    });
  });
});
