import {
  FaCode,
  FaCreditCard,
  FaDatabase,
  FaFolder,
  FaGlobe,
  FaMailBulk,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { GoDependabot } from "react-icons/go";
import { LuKeyRound, LuRadioTower } from "react-icons/lu";
import { MdMonitor } from "react-icons/md";

export type Status = "Online" | "Under Maintainance" | "Offline";

export interface StatusProps {
  icon: React.ReactNode;
  label: string;
  status: Status;
  date: React.ReactNode;
}

const getRandomTimeToday = () => {
  const today = new Date();

  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);

  const randomDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    hours,
    minutes,
    seconds
  );

  return randomDate.toISOString().slice(0, 19).replace("T", " ");
};

export const statusData: StatusProps[] = [
  { icon: <MdMonitor />, label: "Web App", status: "Online", date: getRandomTimeToday() },
  { icon: <FaCode />, label: "API", status: "Online", date: getRandomTimeToday() },
  { icon: <LuRadioTower />, label: "Realtime (WS)", status: "Online", date: getRandomTimeToday() },
  { icon: <FaDatabase />, label: "Database", status: "Online", date: getRandomTimeToday() },
  { icon: <FaFolder />, label: "File Storage", status: "Online", date: getRandomTimeToday() },
  { icon: <LuKeyRound />, label: "Authentication", status: "Online", date: getRandomTimeToday() },
  {
    icon: <FaCreditCard />,
    label: "Billing & Webhooks",
    status: "Online",
    date: getRandomTimeToday(),
  },
  {
    icon: <GoDependabot />,
    label: "AI Search & Answers",
    status: "Online",
    date: getRandomTimeToday(),
  },
  { icon: <FaSearch />, label: "Search Index", status: "Online", date: getRandomTimeToday() },
  {
    icon: <FaUser />,
    label: "Collaboratiob Services",
    status: "Online",
    date: getRandomTimeToday(),
  },
  { icon: <FaMailBulk />, label: "Email Delivery", status: "Online", date: getRandomTimeToday() },
  { icon: <FaGlobe />, label: "CDN & Edge", status: "Online", date: getRandomTimeToday() },
];
