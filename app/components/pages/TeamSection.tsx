"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import api from "@/app/lib/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* ------------------------------------
      Types
------------------------------------ */
type TeamMember = {
  id: number;
  name: string;
  job_description: string;
  photo_url: string;
};

export default function TeamSection() {
  const t = useTranslations("TeamSliders");
  const locale = useLocale();
  const isRTL = locale === "fa";

  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loadingTeam, setLoadingTeam] = useState(true);

  /* ------------------------------------
      Fetch Team
  ------------------------------------ */
  useEffect(() => {
    setLoadingTeam(true);

    api
      .get(`/v1/team/?lang=${locale}`)
      .then((res) => setTeam(res.data))
      .catch((err) => console.error("Team Fetch Error:", err))
      .finally(() => setLoadingTeam(false));
  }, [locale]);

  return (
    <div className="p-4 w-full lg:max-w-7xl mx-auto">
      {loadingTeam ? (
        /* ---------------- Skeleton ---------------- */
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse bg-white p-4 rounded">
              <div className="w-full h-40 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
              {/* <div className="h-3 w-full bg-gray-200 rounded"></div> */}
            </div>
          ))}
        </div>
      ) : team.length === 0 ? (
        /* ---------------- Empty State ---------------- */
        <p className="text-center text-sm text-zinc-500">
          {t("noTeamFound")}
        </p>
      ) : (
        <>
          {/* =====================================================
                          MOBILE SWIPER
          ===================================================== */}
          <div className="lg:hidden">
            <Swiper
              modules={[Pagination]}
              dir={isRTL ? "rtl" : "ltr"}
              spaceBetween={16}
              slidesPerView={2}
              centeredSlides={false}
              pagination={{ clickable: true }}
            >
              {team.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="bg-white border border-zinc-200 rounded overflow-hidden shadow-sm w-[182px]">
                    <img
                      src={member.photo_url}
                      alt={member.name}
                      className="w-full h-44 object-cover"
                    />

                    <div className="p-4">
                      <p className="text-[#005E8B] font-semibold mb-1">
                        {member.name}
                      </p>
                      <p className="text-xs text-gray-600 leading-6">
                        {member.job_description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* =====================================================
                          DESKTOP GRID
          ===================================================== */}
          <div className="hidden lg:grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-zinc-200 rounded overflow-hidden shadow-sm"
              >
                <img
                  src={member.photo_url}
                  alt={member.name}
                  className="w-full h-44 object-cover"
                />

                <div className="p-4">
                  <p className="text-[#005E8B] font-semibold mb-1">
                    {member.name}
                  </p>
                  <p className="text-xs text-gray-600 leading-6">
                    {member.job_description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}