import React, { useEffect, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import { Card, CardMediaProps } from '../Card/Card';
import { useSpringCarousel } from 'react-spring-carousel';
import { ArrowIcon } from '../Icon/ArrowIcon';
import useMediaQuery, { BREAKPOINTS } from './useMediaQuery';

export interface CarouselProps {
  items: ({ id: string } & CardMediaProps)[];
  className?: string;
}

export const Carousel = (props: CarouselProps) => {
  const [itemsPerSlide, setItemsPerSlide] = useState(6);
  const isDescktop = useMediaQuery(`(min-width: ${BREAKPOINTS.desktopSM}px)`);
  const isTablet = useMediaQuery(`(min-width: ${BREAKPOINTS.tabletSM}px)`);
  const isMobile = useMediaQuery(`(min-width: ${BREAKPOINTS.mobile}px)`);
  const isMobileSM = useMediaQuery(`(min-width: ${BREAKPOINTS.mobileSM}px)`);

  useEffect(() => {
    if (isDescktop) {
      setItemsPerSlide(6);
    } else if (isTablet) {
      setItemsPerSlide(4);
    } else if (isMobile) {
      setItemsPerSlide(2);
    } else if (isMobileSM) {
      setItemsPerSlide(1);
    }
  }, [isDescktop, isTablet, isMobile]);

  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    itemsPerSlide,
    withLoop: true,
    items: props.items.map((i) => ({
      id: i.imageSrc,
      renderItem: (
        <div className='w-40'>
          <Card
            key={i.id}
            imageSrc={i.imageSrc}
            imageAlt={i.imageAlt}
            title={i.title}
            href={i.href}
            onAdd={() => {}}
          />
        </div>
      ),
    })),
  });

  return (
    <div className={clsx(props.className, 'flex flex-row items-center justify-between w-full')}>
      <Button
        onPress={slideToPrevItem}
        variant='gray'
        icon={<ArrowIcon />}
        className='rotate-180 z-40 -mr-3'
      />
      <div className='overflow-hidden'>{carouselFragment}</div>
      <Button
        onPress={slideToNextItem}
        variant='gray'
        icon={<ArrowIcon />}
        className='z-40 -ml-3'
      />
    </div>
  );
};
