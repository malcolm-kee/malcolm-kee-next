import cx from 'classnames';
import * as React from 'react';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  render?: (btnProps: {
    className: string;
    children?: React.ReactNode;
  }) => JSX.Element;
  variant?: 'primary' | 'secondary';
};

export const Button = ({
  className,
  children,
  render,
  type = 'button',
  variant,
  ...props
}: ButtonProps) => {
  const classes = cx(
    'flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10',
    variant && classesByVariant[variant],
    className
  );

  if (render) {
    return render({
      className: classes,
      children,
    });
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
};

type Variant = NonNullable<ButtonProps['variant']>;

const classesByVariant: Record<Variant, string> = {
  primary:
    'text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus-visible:shadow-outline-teal',
  secondary:
    'text-teal-700 bg-teal-100 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus-visible:shadow-outline-teal focus:border-teal-300',
};

export const LinkButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & Pick<ButtonProps, 'variant'>
>(function LinkButton({ className, children, variant, ...linkProps }, ref) {
  return (
    <Button
      className={className}
      variant={variant}
      render={(btnProps) => <a {...btnProps} {...linkProps} ref={ref} />}
    >
      {children}
    </Button>
  );
});
