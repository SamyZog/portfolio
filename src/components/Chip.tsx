import clsx from 'clsx';
import { ComponentProps, PropsWithChildren } from 'react';

export const Chip = ({ className, ...props }: PropsWithChildren & ComponentProps<'div'>) => (
  <div
    className={clsx(
      className,
      'mr-2',
      'mt-2',
      'rounded-full',
      'px-3',
      'py-1',
      'text-xs',
      'lowercase',
      'w-fit',
      'select-none',
    )}
    {...props}
  />
);
