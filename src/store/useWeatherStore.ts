import { create } from 'zustand';
import { WeatherStore } from './types/types.ts';
import createWeatherSlice from './createWeatherSlice.ts';

const useWeatherStore = create<WeatherStore>()((...args) => ({
  // This could potentially be expanded with extra store slices such as an activity slice, a user slice etc.
  ...createWeatherSlice(...args),
}));

export default useWeatherStore;
