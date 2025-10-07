import SectionContainer from "@/components/global/SectionContainer";
import StatusCard from "@/components/status/StatusCard";
import { statusData } from "@/data/product/statusData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Status | AtlasNote",
  description:
    "Check the current status of AtlasNote services. View real-time information on uptime, outages, and performance so your team always knows what's online.",
};

const StatusPage = () => {
  return (
    <SectionContainer width="max-w-7xl" className="space-y-20">
      <div className="p-4 border border-green-500 bg-green-500/10 rounded-xl ">
        <h2 className="text-3xl font-bold">Everything Operational</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {statusData.map((status, idx) => (
          <StatusCard
            key={idx}
            icon={status.icon}
            label={status.label}
            status={status.status}
            date={status.date}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default StatusPage;
