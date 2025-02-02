import { Metadata } from "next";
import GiveFeedback from "../components/give-feedback";

export const metadata: Metadata = {
  title: "Percentage",
  description: "Select the percent",
};

export default function _SelectPercentage() {
  // return <SelectPercentage />;
  return <div>
    <GiveFeedback />
  </div>;
}
