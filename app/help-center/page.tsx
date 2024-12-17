import HelpCenter from "../components/help-center";
import { Metadata } from "next";

export const metadata: Metadata ={
  title:"Contact Autoswappr",
  description:"Encountering an issue? We're here to help! Reach out to us anytime — available 24/7."
  }
  
export default function _HelpCenter() {
  return <HelpCenter />;
}
