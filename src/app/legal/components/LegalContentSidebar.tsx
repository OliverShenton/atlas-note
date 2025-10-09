"use client";

import { useEffect, useState } from "react";

const LegalContentSidebar = ({
  sections,
  title,
}: {
  sections: { title: string }[];
  title: string;
}) => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    });

    sections.forEach((_, i) => {
      const element = document.getElementById(`section-${i}`);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="hidden md:block w-64 pr-8 sticky top-20 self-start">
      <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-[#111] via-[#222] to-[#111] p-4 text-sm">
        <p className="font-semibold mb-3">{title}</p>
        <ul className="space-y-2">
          {sections.map((s, i) => (
            <li key={i}>
              <a
                href={`#section-${i}`}
                className={`block transition-colors ${
                  active === `section-${i}`
                    ? "text-indigo-600 font-medium"
                    : "text-slate-300 hover:text-slate-100"
                }`}>
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default LegalContentSidebar;
