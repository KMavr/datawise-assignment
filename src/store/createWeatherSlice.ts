import { StateCreator } from 'zustand';
import { WeatherSlice, WeatherStore } from './types/types.ts';

const createWeatherSlice: StateCreator<WeatherStore, [], [], WeatherSlice> = (set) => ({
  weatherCondition: null,
  temperature: 14,
  location: 'New York',
  setWeatherCondition: (weatherCondition) => set(() => ({ weatherCondition })),
  setTemperature: (temperature) => set(() => ({ temperature })),
  setLocation: (location) => set(() => ({ location })),
});

export default createWeatherSlice;
