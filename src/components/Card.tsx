import clsx from 'clsx';
import { ComponentProps } from 'react';

export const Card = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    {...props}
    className={clsx(
      className,
      'cursor-default',
      'rounded-md',
      'p-4',
      'py-3',
    )}
  />
);
