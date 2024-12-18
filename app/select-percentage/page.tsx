import SelectPercentage from "./../components/select-percentage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Percentage",
  description: "Select the percent",
};

  
export default function _SelectPercentage() {
  return <SelectPercentage />;
}
