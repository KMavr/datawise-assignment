import { useCallback, useState, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import { Box, Stack, Text } from '@mantine/core';
import { EmblaCarouselType } from 'embla-carousel';
import { WEATHER_CONDITIONS } from '../../../forecast/model/imageMap.ts';
import arrowRight from '../../assets/arrowRight.svg';
import arrowLeft from '../../assets/arrowLeft.svg';
import { IMAGE_MAP } from '../../model/imageMap.ts';

function WeatherCarousel() {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  //Assuming that this data will be received from server.
  const daysOfWeek = [
    { day: 'Sun', icon: IMAGE_MAP[WEATHER_CONDITIONS.CLOUDY] },
    { day: 'Mon', icon: IMAGE_MAP[WEATHER_CONDITIONS.CLOUDY] },
    { day: 'Tue', icon: IMAGE_MAP[WEATHER_CONDITIONS.SUNNY] },
    { day: 'Wed', icon: IMAGE_MAP[WEATHER_CONDITIONS.CLOUDY] },
    { day: 'Thu', icon: IMAGE_MAP[WEATHER_CONDITIONS.STORMY] },
    { day: 'Fri', icon: IMAGE_MAP[WEATHER_CONDITIONS.RAINY] },
    { day: 'Sat', icon: IMAGE_MAP[WEATHER_CONDITIONS.STORMY] },
  ];
  const todayIndex = new Date().getDay();
  const rotatedDaysOfWeek = [...daysOfWeek.slice(todayIndex), ...daysOfWeek.slice(0, todayIndex)];

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const getPositionStyle = (index: number) => {
    switch (index) {
      case activeIndex:
        return { text: 'lg', image: { width: 40, opacity: '100%' } };
      case activeIndex - 2:
      case activeIndex + 2:
        return { text: 'sm', image: { width: 30, opacity: '60%' } };
      default:
        return { text: 'md', image: { width: 35, opacity: '80%' } };
    }
  };

  return (
    <div className="flex flex-row justify-between px-2 pt-6">
      <div onClick={scrollPrev} className="cursor-pointer">
        <img src={arrowLeft} className="w-4 pt-3" style={{ background: 'transparent' }} />
      </div>
      <Carousel
        getEmblaApi={setEmblaApi}
        slideSize="20%"
        slideGap="xs"
        align="center"
        loop
        containScroll="trimSnaps"
        withControls={false}>
        {rotatedDaysOfWeek.map((item, index) => {
          const style = getPositionStyle(index);
          return (
            <Carousel.Slide key={item.day} className="flex flex-col justify-end">
              <Stack align="center">
                <Text size={style.text}>{item.day}</Text>
                <Box
                  component="img"
                  src={item.icon}
                  alt={`${item.day} icon`}
                  width={style.image.width}
                  opacity={style.image.opacity}
                />
              </Stack>
            </Carousel.Slide>
          );
        })}
      </Carousel>
      <div onClick={scrollNext} className="cursor-pointer">
        <img src={arrowRight} className="w-4 pt-3" style={{ background: 'transparent' }} />
      </div>
    </div>
  );
}

export default WeatherCarousel;
