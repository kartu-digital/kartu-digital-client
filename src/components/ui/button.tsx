import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
//Non dropdown navigation button
const buttonVariants = cva(
  'rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',

        //prajna
        mobile_navigation:
          'hover:bg-slate-100 transition-all duration-300 inline-flex',
        desktop_navigation:
          'hover:bg-slate-100 transition-all duration-300 items-center justify-center',
        social: 'p-4 bg-white bg-opacity-25 rounded-3xl flex items-center',
        neon: 'bg-greenYellow items-center text-center border-2 border-greenYellow hover:bg-transparent hover:text-greenYellow transition-all duration-300',
        outline_circular:
          'border-2 border-input rounded-full p-2 shadow-sm hover:bg-accent hover:text-accent-foreground border-black',
        //=======

        template: 'bg-slate-100 hover:bg-slate-200',
        //=======
        //tio
        neon_green:
          'flex items-center justify-center rounded-full border-2 border-NeonGreen bg-NeonGreen text-center transition-all duration-300 hover:bg-transparent hover:text-NeonGreen',
        black_outline:
          'flex items-center justify-center rounded-full border-2 border-black text-center transition-all duration-300 hover:bg-black hover:text-white',
        black:
          'flex items-center justify-center rounded-full border-2 border-black bg-black text-center text-white transition-all duration-300 hover:bg-transparent hover:text-black',
        purple_blue:
          'flex items-center justify-center rounded-full border-2 border-PurpleBlue bg-PurpleBlue text-center text-white transition-all duration-300 hover:bg-transparent hover:text-PurpleBlue',
        //======
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-full px-8',
        //prajna
        desktop_nav: 'px-4 py-3 rounded-2xl',
        mobile_nav: 'w-full px-4 py-3',
        //=============
        icon: 'h-13 w-13',
        loginregister: 'py-2 px-6',
        //russel
        sub_category: 'h-min-9 h-fit px-4 py-2',
        //==========
        //tio
        global_button: 'p-5 w-72',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isActive?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, isActive = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const activeStyles = isActive
      ? 'bg-black text-white hover:bg-black text-white'
      : '';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          activeStyles,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
export { Button, buttonVariants };
