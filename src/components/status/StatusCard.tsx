import { StatusProps } from "@/data/product/statusData";

const StatusCard = ({ icon, label, status, date }: StatusProps) => {
  return (
    <article className="border border-[var(--secondary-text)]/10 px-8 py-6 gap-4 space-y-4">
      <p className="flex justify-center text-3xl">{icon}</p>
      <p className="text-[12px] text-[var(--secondary-text)]">
        Service: <span className="text-lg text-[var(--text)]">{label}</span>
      </p>
      <p className="text-[12px] text-[var(--secondary-text)]">
        Last Updated: <span className="text-[var(--text)]">{date}</span>
      </p>
      <div className="flex gap-2 items-center justify-end text-lg text-[var(--text)] font-bold">
        {status === "Online" ? (
          <p className="text-green-500 text-3xl">•</p>
        ) : (
          <p className="text-red-500 text-3xl">•</p>
        )}
        {status}
      </div>
    </article>
  );
};

export default StatusCard;
