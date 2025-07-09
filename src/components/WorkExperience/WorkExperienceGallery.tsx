// WorkExperienceGallery.tsx
import MarkdownGallery from "../Project/MarkdownGallery";

interface WorkExperienceGalleryProps {
  images: { src: string; alt?: string }[];
}

const WorkExperienceGallery = ({ images }: WorkExperienceGalleryProps) => {
  if (!images || images.length === 0) return null;
  return <MarkdownGallery images={images} />;
};

export default WorkExperienceGallery;
