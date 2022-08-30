import { SVGProps } from 'react';

export const Icon = ({ children, width, height, viewBox, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox={viewBox ?? `0 0 ${width} ${height}`}
    style={{ display: 'inline-block' }}
    {...props}
  >
    {children}
  </svg>
);