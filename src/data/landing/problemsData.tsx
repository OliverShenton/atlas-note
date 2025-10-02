import { FaSearch, FaUserPlus } from "react-icons/fa";
import { LuShieldAlert } from "react-icons/lu";
import { MdOutlineSignalWifiOff } from "react-icons/md";
import { RiFileSearchFill, RiGitForkFill } from "react-icons/ri";

export interface ProblemsSchema {
  icon: React.ReactNode;
  title: string;
  description: string;
  background: string;
  crazyFactor: string;
}

export const ProblemsData: ProblemsSchema[] = [
  {
    icon: <RiFileSearchFill />,
    title: "Scattered knowledge",
    description: "Docs, chats, and links scatter across apps - no single source of truth.",
    background: "bg-gradient-to-r from-indigo-500 to-purple-500",
    crazyFactor: "-rotate-2 translate-y-1 scale-95",
  },
  {
    icon: <FaSearch />,
    title: "Brittle search",
    description: "Keywords miss context. You know the answer exists, but you can't find it.",
    background: "bg-gradient-to-r from-blue-500 to-cyan-500",
    crazyFactor: "rotate-1",
  },
  {
    icon: <RiGitForkFill />,
    title: "Version drift",
    description: "Multiple copies, conflicting edits, and no clear 'source of truth'",
    background: "bg-gradient-to-r from-rose-500 to-pink-500",
    crazyFactor: "rotate-2 translate-y-1",
  },
  {
    icon: <FaUserPlus />,
    title: "Slow onboarding",
    description: "New teamates spend weeks asking basics and re-creating docs.",
    background: "bg-gradient-to-r from-amber-500 to-orange-500",
    crazyFactor: "-rotate-1",
  },
  {
    icon: <MdOutlineSignalWifiOff />,
    title: "Offline gaps",
    description: "Work grinds to a halt when Wi-Fi blips or you’re offline.",
    background: "bg-gradient-to-r from-slate-500 to-slate-700",
    crazyFactor: "rotate-1 translate-y-1 scale-95",
  },
  {
    icon: <LuShieldAlert />,
    title: "Permission spaghetti",
    description: "Links break, access is unclear, and sharing feels risky.",
    background: "bg-gradient-to-r from-emerald-500 to-green-600",
    crazyFactor: "-rotate-2 scale-105",
  },
];
