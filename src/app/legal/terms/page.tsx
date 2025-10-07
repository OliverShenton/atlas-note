import CustomHr from "@/components/global/CustomHr";
import LegalContentSidebar from "@/app/legal/components/LegalContentSidebar";
import LegalSection from "@/app/legal/components/LegalSection";
import { termsPolicyData } from "@/app/legal/terms/termsPolicyData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | AtlasNote",
  description:
    "Review the AtlasNote Terms of Service. These terms outline your rights and responsibilities when using our platform, including account usage, subscriptions, payments, and acceptable use policies.",
};

let main = (
  <>
    {termsPolicyData.sections.map((section, idx) => (
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

const LegalTermsPage = () => {
  return (
    <LegalSection
      title="Terms & Conditions"
      date={termsPolicyData.effectiveDate}
      sidebar={
        <LegalContentSidebar sections={termsPolicyData.sections} title="Terms & Conditions" />
      }
      main={main}
    />
  );
};

export default LegalTermsPage;
