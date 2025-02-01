import HelpCenter from "../components/help-center";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center",
  description: "Reach out to us -24/7 Customer services",
};

  
export default function _HelpCenter() {
  return <>
  <HelpCenter />;
  </>
}
