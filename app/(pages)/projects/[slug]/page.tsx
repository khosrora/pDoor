"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Lightbox from "react-awesome-lightbox";
import { IconSearch } from "@tabler/icons-react";
import api from "@/app/lib/axios";

interface MediaItem {
  media_type: "image" | "video";
  image: string | null;
  video_file: string | null;
  video_embed: string | null;
  caption: string;
  order: number;
}

interface ProjectDetail {
  title: string;
  description: string;
  media_items: MediaItem[];
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);

    api
      .get(`/v1/projects/p/${slug}/`)
      .then((res) => setProject(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  const images =
    project?.media_items
      ?.filter((m) => m.media_type === "image" && m.image)
      .map((m) => ({
        url: m.image as string,
        title: m.caption,
      })) || [];

  return (
    <div className="max-w-7xl mx-auto p-4 mt-24">
      {/* Title */}
      {/* Title + Description */}
      {loading ? (
        <div className="h-6 w-64 bg-zinc-200 animate-pulse rounded mb-6" />
      ) : (
        <div>
          <h1 className="text-xl font-bold mb-4">{project?.title}</h1>

          <div
            className="prose max-w-none mb-8"
            dangerouslySetInnerHTML={{
              __html: project?.description || "",
            }}
          />
        </div>
      )}

      {/* Media Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : project?.media_items.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-100 rounded-sm overflow-hidden cursor-pointer"
                onClick={() =>
                  item.media_type === "image" && setOpenIndex(index)
                }
              >
                {/* Image */}
                {item.media_type === "image" && item.image && (
                  <div className="relative group">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-[240px] object-cover"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <IconSearch className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}

                {/* Video */}
                {item.media_type === "video" && item.video_file && (
                  <video
                    src={item.video_file}
                    controls
                    className="w-full h-[240px] object-cover"
                  />
                )}
              </div>
            ))}
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <Lightbox
          images={images}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
}

/* =======================
   Skeleton Card Component
======================= */
function SkeletonCard() {
  return (
    <div className="rounded-sm overflow-hidden bg-zinc-200 animate-pulse">
      <div className="w-full h-[240px] bg-zinc-300" />
    </div>
  );
}
