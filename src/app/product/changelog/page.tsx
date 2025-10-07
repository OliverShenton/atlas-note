import ChangelogSection from "@/components/changelog/ChangelogSection";
import CustomHr from "@/components/global/CustomHr";
import { changelogData } from "@/data/product/changelogData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog | AtlasNote",
  description:
    "Stay up to date with the latest improvements in AtlasNote. Explore new features, product updates, and performance enhancements as we continue building the future of collaborative knowledge.",
};

let main = (
  <>
    {changelogData.map((change, idx) => (
      <section key={change.title} className="space-y-6">
        <CustomHr opaque />
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold">{change.title}</h2>
          <span className="text-sm text-[var(--secondary-text)]">|</span>
          <p className="text-sm text-[var(--secondary-text)]">{change.date}</p>
        </div>
        <ul className="text-[var(--secondary-text)] space-y-4">
          {change.items.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </ul>
      </section>
    ))}
  </>
);

const ChangelogPage = () => {
  return <ChangelogSection title="Changelog" main={main} />;
};

export default ChangelogPage;
