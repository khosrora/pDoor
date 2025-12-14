"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Lightbox from "react-awesome-lightbox";

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
  media_items: MediaItem[];
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch(
      `https://api.persiadoorco.com/api/v1/projects/p/${slug}/`
    )
      .then((res) => res.json())
      .then(setProject)
      .catch(console.error);
  }, [slug]);

  if (!project) return null;

  // فقط تصاویر برای Lightbox
  const images = project.media_items
    .filter((m) => m.media_type === "image" && m.image)
    .map((m) => ({
      url: m.image as string,
      title: m.caption,
    }));

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-6">{project.title}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {project.media_items.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-100 rounded-sm overflow-hidden cursor-pointer"
            onClick={() =>
              item.media_type === "image" && setOpenIndex(index)
            }
          >
            {item.media_type === "image" && item.image && (
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-[240px] object-cover"
              />
            )}

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
