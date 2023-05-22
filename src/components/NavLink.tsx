import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { AppLink } from './AppLink';

export const NavLink = forwardRef<HTMLAnchorElement, ComponentPropsWithRef<typeof AppLink>>((
  { className, activeClassname, ...props },
  ref,
) => (
  <AppLink
    ref={ref}
    {...props}
    activeClassname={clsx(
      activeClassname,
    )}
    className={clsx(
      className,
      'rounded-md',
      'px-3',
      'py-1',
      'text-sm',
      'font-semibold',
      'lowercase',
      'duration-200',
    )}
  />
));
