export const distanceFormatter = (distance: number) => {
  if (distance < 1000) {
    return `${distance}m away`;
  }
  return `${distance / 1000}km away`;
};
