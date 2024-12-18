import React from 'react'
import { SelectBaseToken } from '../components/select-base-token'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Token Selection",
  description: "Select a token to swap.",
};

const page = () => {
  return (
    <div>
        <SelectBaseToken />
    </div>
  )
}

export default page