import * as React from "react"
import { SVGProps } from "react"

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
)



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
)
