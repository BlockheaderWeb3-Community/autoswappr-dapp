import React from 'react'
import { SelectBaseToken } from '../components/select-base-token'
import { Metadata } from "next";
import GiveFeedback from '../components/give-feedback';

export const metadata: Metadata = {
  title: "Token Selection",
  description: "Select a token to swap.",
};

const page = () => {
  return (
    <div>
        <SelectBaseToken />
        <GiveFeedback />
    </div>
  )
}

export default page