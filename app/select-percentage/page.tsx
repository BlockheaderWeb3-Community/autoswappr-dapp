import SelectPercentage from "./../components/select-percentage";
import { Metadata } from "next";

export const metadata: Metadata ={
  title:"Percentage Selection",
  description:"Select the percentage you want to auto-swap"
  }
  
export default function _SelectPercentage() {
  return <SelectPercentage />;
}
