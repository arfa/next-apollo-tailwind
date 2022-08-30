import React, { useRef } from 'react';
import { useButton, AriaButtonProps } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import clsx from 'clsx';

type Variant = 'blackAlpha' | 'gray';
export interface ButtonProps extends AriaButtonProps {
  variant?: Variant;
  size?: 'xs' | 'md' | 'lg';
  fullWidth?: boolean;
  rounded?: boolean;
  className?: string;
  icon?: React.ReactElement;
}

const useBackgroundColor = (variant?: Variant, isDisabled?: boolean, isPressed?: boolean) => {
  return clsx({
    'bg-opacity-40': variant === 'blackAlpha',
    'bg-black': variant === 'blackAlpha',
    'bg-opacity-90': isPressed,
    'bg-gray-750': variant === 'gray',
    'bg-gray-500': isDisabled,
  });
};

export const Button = (props: ButtonProps) => {
  const ref = useRef(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  const backgroundColor = useBackgroundColor(props.variant, props.isDisabled, isPressed);

  const className = clsx(
    props.className,
    // layout
    'inline-flex items-center justify-center',

    // Remove the browser default focus ring and add a custom one
    'focus:outline-none',
    isFocusVisible ? 'shadow-outline' : '',

    // animation
    'transition',
    'ease-in-out',
    'duration-150',

    backgroundColor,
    props.fullWidth ? 'w-full' : 'w-auto',
    props.size === 'xs' ? 'h-4' : props.size === 'md' ? 'h-6' : 'h-8',
    props.size === 'xs' ? 'p-1' : props.size === 'md' ? 'p-2' : 'p-3',
    props.rounded ? 'rounded-md' : '',
    'text-white',
    'font-medium',
    'cursor-pointer'
  );

  return (
    <button {...mergeProps(focusProps, buttonProps)} ref={ref} className={className}>
      {!!props.icon &&
        React.cloneElement(props.icon, {
          className: clsx(
            props.children ? 'mr-2' : '',
            props.size === 'xs' ? 'h-2' : props.size === 'md' ? 'h-3' : 'h-4',
            props.size === 'xs' ? 'w-2' : props.size === 'md' ? 'w-3' : 'w-4'
          ),
          'aria-hidden': 'true',
        })}
      <span>{props.children}</span>
    </button>
  );
};
