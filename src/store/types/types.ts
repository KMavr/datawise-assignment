export type weatherCondition = 'sunny' | 'stormy' | 'cloudy' | 'rainy' | null;

export interface WeatherSlice {
  weatherCondition: weatherCondition;
  temperature: number;
  location: string;
  setWeatherCondition: (weatherCondition: weatherCondition) => void;
  setTemperature: (temperature: number) => void;
  setLocation: (location: string) => void;
}

export type WeatherStore = WeatherSlice;
