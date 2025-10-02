import CustomHr from "@/components/global/CustomHr";
import LegalSection from "@/components/legal/LegalSection";
import LegalContentSidebar from "@/components/legal/LegalContentSidebar";
import { privacyPolicyData } from "@/data/legal/privacyPolicyData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AtlasNote",
  description:
    "Read the AtlasNote Privacy Policy. Learn how we collect, use, and protect your personal data, including account details, workspace content, and usage analytics. We’re committed to transparency, security, and compliance with GDPR and CCPA.",
};

let main = (
  <>
    {privacyPolicyData.sections.map((section, idx) => (
      <section
        key={idx}
        id={`section-${idx}`}
        aria-labelledby="section-title"
        className="space-y-6">
        <CustomHr opaque />
        <h2 id={`section-title-${section.title}`} className="text-lg font-semibold">
          {section.title}
        </h2>
        <div className="flex flex-wrap gap-1">
          {section.body && <p>{section.body}</p>}
          {section.link && (
            <a href={`mailto:${section.link}`} className="hover:text-blue-500 underline">
              {section.link}
            </a>
          )}
        </div>
        {section.list && (
          <ul>
            {section.list.map((item, idx) => (
              <p key={idx}>• {item}</p>
            ))}
          </ul>
        )}
      </section>
    ))}
  </>
);

const LegalPrivacyPage = () => {
  return (
    <LegalSection
      title="Privacy Policy"
      date={privacyPolicyData.effectiveDate}
      sidebar={<LegalContentSidebar sections={privacyPolicyData.sections} title="Privacy Policy" />}
      main={main}
    />
  );
};

export default LegalPrivacyPage;
