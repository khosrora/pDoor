"use client";

import { useState, useEffect } from "react";

type TeamMember = {
  id: number;
  name: string;
  job_description: string;
  photo_url: string;
};

export default function TeamSection() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState(
    document.documentElement.lang || navigator.language || "fa"
  );

  useEffect(() => {
    const fetchTeam = async () => {
      setLoading(true);
      try {
        const apiUrl =
          lang.startsWith("en")
            ? "https://api.persiadoorco.com/api/v1/team?lang=en"
            : "https://api.persiadoorco.com/api/v1/team/";

        const res = await fetch(apiUrl);
        const data = await res.json();
        setTeam(data);
      } catch (err) {
        console.error("خطا در دریافت اطلاعات تیم:", err);
        setTeam([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, [lang]); // توجه: وقتی lang تغییر کند، useEffect دوباره اجرا می‌شود

  // گوش دادن به تغییر lang در html (مثلا وقتی زبان سایت تغییر کند)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newLang = document.documentElement.lang || "fa";
      setLang(newLang);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

    return () => observer.disconnect();
  }, []);

  if (loading) return <p className="text-center py-10">در حال بارگذاری...</p>;

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 justify-center max-w-7xl mx-auto">
      {team.map((member) => (
        <div
          key={member.id}
          className="bg-white w-[288px] p-4 flex flex-col items-start"
        >
          <img
            src={member.photo_url}
            alt={member.name}
            className="w-full h-[169px] object-cover mb-4 rounded-sm"
          />
          <h3 className="text-lg font-semibold mb-1 text-center mb-4">{member.name}</h3>
          <p className="text-gray-600 r mb-2 leading-8">{member.job_description}</p>
        </div>
      ))}
    </div>
  );
}
