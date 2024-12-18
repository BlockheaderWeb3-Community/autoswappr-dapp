import ActivityLog from "../components/activity-log";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activity Log",
  description: "Monitor your activity.",
};


  
export default function _ActivityLog() {
    return <ActivityLog />;
}