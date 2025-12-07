"use client";

import { useState, useEffect } from "react";

type TeamMember = {
  id: number;
  name: string;
  job_description: string;
  photo_url: string; // فرض بر اینکه API لینک عکس میده
  
};

export default function TeamSection() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.persiadoorco.com/api/v1/team/")
      .then((res) => res.json())
      .then((data) => {
        setTeam(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در دریافت اطلاعات تیم:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">در حال بارگذاری...</p>;

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 justify-center max-w-7xl mx-auto">
      {team.map((member) => (
        <div
          key={member.id}
          className="bg-white w-[288px] h-[391px] p-4   flex flex-col items-start"
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
