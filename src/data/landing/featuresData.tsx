import { CiWifiOff } from "react-icons/ci";
import { FaChartBar, FaUsers } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { FiLayout } from "react-icons/fi";
import { RiRobotFill } from "react-icons/ri";

export interface FeaturesSchema {
  icon: React.ReactNode;
  title: string;
  description: string;
  background: string;
}

export const featuresData: FeaturesSchema[] = [
  {
    icon: <FaUsers />,
    title: "Collaborative editor",
    description: "Work together in real time with conflict-free editing and presence cursors.",
    background: "bg-gradient-to-br from-indigo-500 to-purple-500",
  },
  {
    icon: <RiRobotFill />,
    title: "AI answers built-in",
    description: "Stop searching, just ask. Get grounded answers with citations from your docs.",
    background: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    icon: <CiWifiOff />,
    title: "Offline-first",
    description: "Keep working when the Wi-Fi drops - everything syncs seamlessly later.",
    background: "bg-gradient-to-br from-gray-500 to-gray-700",
  },
  {
    icon: <FiLayout />,
    title: "Structured blocks",
    description: "Organise content your way with flexible blocks for text, code, tables, and more.",
    background: "bg-gradient-to-br from-pink-500 to-rose-500",
  },
  {
    icon: <FaShield />,
    title: "Secure sharing",
    description: "Share with confidence using roles, permissions, and expiring public links.",
    background: "bg-gradient-to-br from-emerald-500 to-green-600",
  },
  {
    icon: <FaChartBar />,
    title: "Analytics & insights",
    description: "Understand usage with built-in analytics on search queries and doc activity.",
    background: "bg-gradient-to-br ffrom-amber-500 to-orange-500",
  },
];
