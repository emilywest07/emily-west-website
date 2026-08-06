import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowIcon(props: IconProps) {
  return <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" {...props}><path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function ReplayIcon(props: IconProps) {
  return <svg aria-hidden="true" viewBox="0 0 18 18" fill="none" {...props}><path d="M14.5 6.2A6 6 0 1 1 9 3M11.8 1.8 9 3l1.2 2.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function SearchIcon(props: IconProps) {
  return <svg aria-hidden="true" viewBox="0 0 18 18" fill="none" {...props}><circle cx="8" cy="8" r="4.8" stroke="currentColor" strokeWidth="1.4"/><path d="m11.6 11.6 3.3 3.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>;
}

export function CheckIcon(props: IconProps) {
  return <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" {...props}><path d="m3 8.2 3.1 3.1L13 4.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

