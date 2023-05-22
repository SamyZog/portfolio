import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface NavLinkProps extends ComponentPropsWithRef<typeof Link> {
  activeClassname?: string;
}

export const AppLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({
  activeClassname = '',
  href,
  className = '',
  as,
  ...props
}, ref) => {
  const { asPath } = useRouter();

  return (
    <Link
      ref={ref}
      href={href}
      as={as}
      {...props}
      className={clsx(
        className,
        asPath === href || asPath === as ? activeClassname : '',
      )}
    />
  );
});
