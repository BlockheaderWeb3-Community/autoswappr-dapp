import ActivityLog from "../components/activity-log";
import { Metadata } from "next";

export const metadata: Metadata ={
  title:"Activity Log",
  description:"Access your activity log anytime from the comfort of your home — we're available 24/7"
  }

  
export default function _ActivityLog() {
    return <ActivityLog />;
}