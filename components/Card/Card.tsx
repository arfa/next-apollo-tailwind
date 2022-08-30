import React from 'react';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import Image from 'next/image';
import { PlusIcon } from '../Icon/PlusIcon';

export type CardMediaProps = {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  href?: string;
};

export type CardMediaPropsWithId = CardMediaProps & { id: string };


export interface CardProps extends CardMediaProps {
  onAdd?: () => void;
  className?: string;
}

export const Card = (props: CardProps) => {
  const { imageSrc, imageAlt, title, href, onAdd, className } = props;
  return (
    <div
      className={clsx(
        className,
        'min-w-sm overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
      )}
    >
      <div className='group relative'>
        <Image
          width={200}
          height={266}
          layout='responsive'
          src={imageSrc}
          alt={imageAlt}
          className='group-hover:opacity-75'
        />
        <Button
          className='absolute right-3 bottom-3'
          icon={<PlusIcon />}
          onPress={onAdd}
          variant='blackAlpha'
          rounded
        />
      </div>
      <h3 className='my-3 m-1 truncate not-italic font-semibold text-sm leading-4 text-center text-black dark:text-white'>
        <a href={href}>{title}</a>
      </h3>
    </div>
  );
};
