import * as React from "react";
import { SVGProps } from "react";

export const ApproximateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#A199B8"
      strokeLinecap="round"
      strokeWidth={1.25}
      d="M6.667 4.167h10"
    />
    <path
      stroke="#A199B8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M3.333 4.167h.007M3.333 10h.007M3.333 15.833h.007"
    />
    <path
      stroke="#A199B8"
      strokeLinecap="round"
      strokeWidth={1.25}
      d="M6.667 10h10M6.667 15.833h10"
    />
  </svg>
);

export const GasFeeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#A199B8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.75}
      d="M2 3.963C3.333 2.464 4.667 2.903 6 4c1.333 1.097 2.667 1.536 4 .037M2 7.963C3.333 6.464 4.667 6.903 6 8c1.333 1.097 2.667 1.536 4 .037"
    />
  </svg>
);

export const HistoryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66675 4.16675H16.6667"
      stroke="#A8AFB4"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M3.33325 4.16675H3.34074"
      stroke="#A8AFB4"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.33325 10H3.34074"
      stroke="#A8AFB4"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.33325 15.8333H3.34074"
      stroke="#A8AFB4"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66675 10H16.6667"
      stroke="#A8AFB4"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M6.66675 15.8333H16.6667"
      stroke="#A8AFB4"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </svg>
);

export const GasIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 3.9635C3.33334 2.46405 4.66666 2.90289 6 4C7.33335 5.0971 8.66665 5.53595 10 4.0365"
      stroke="#A8AFB4"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 7.9635C3.33334 6.46405 4.66666 6.9029 6 8C7.33335 9.0971 8.66665 9.53595 10 8.0365"
      stroke="#A8AFB4"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
