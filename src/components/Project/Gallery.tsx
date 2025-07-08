import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: string[];
  altPrefix?: string;
}

const Gallery = ({ images, altPrefix = "gallery" }: GalleryProps) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const openModal = (idx: number) => {
    setCurrent(idx);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 mt-2">
        {images.map((src, idx) => (
          <div
            key={src}
            className="relative w-32 h-32 border rounded overflow-hidden cursor-pointer"
            onClick={() => openModal(idx)}
          >
            <Image
              src={src}
              alt={`${altPrefix}-${idx}`}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform hover:scale-110 duration-200"
            />
          </div>
        ))}
      </div>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeModal}
        >
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl px-2 py-1 bg-black/40 rounded hover:bg-black/70"
            onClick={prev}
            aria-label="이전 이미지"
          >
            &#8592;
          </button>
          <div className="relative w-[80vw] max-w-2xl h-[60vw] max-h-[70vh] flex items-center justify-center">
            <Image
              src={images[current]}
              alt={`${altPrefix}-modal-${current}`}
              fill
              style={{ objectFit: "contain" }}
              className="rounded shadow-lg"
            />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl px-2 py-1 bg-black/40 rounded hover:bg-black/70"
            onClick={next}
            aria-label="다음 이미지"
          >
            &#8594;
          </button>
          <button
            className="absolute top-4 right-4 text-white text-2xl px-2 py-1 bg-black/40 rounded hover:bg-black/70"
            onClick={closeModal}
            aria-label="닫기"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
