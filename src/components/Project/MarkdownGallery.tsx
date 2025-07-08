import Image from "next/image";
import { useState } from "react";

interface MarkdownGalleryProps {
  images: { src: string; alt?: string }[];
}

const MarkdownGallery = ({ images }: MarkdownGalleryProps) => {
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
      <div className="flex flex-wrap gap-2 my-2 justify-start">
        {images.map((img, idx) => (
          <div
            key={img.src}
            className="relative w-32 h-32 border rounded overflow-hidden cursor-pointer"
            onClick={() => openModal(idx)}
          >
            <Image
              src={img.src}
              alt={img.alt || `gallery-img-${idx}`}
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
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl px-3 py-2 bg-black/60 rounded-full hover:bg-black/90 hover:scale-110 transition-all duration-200 shadow-md border border-white/30"
            style={{ zIndex: 10 }}
            onClick={prev}
            aria-label="이전 이미지"
          >
            &#8592;
          </button>
          <div className="flex flex-col items-center justify-center w-[90vw] h-[90vh] max-w-6xl max-h-[90vh]">
            {images[current] && (
              <>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={images[current].src}
                    alt={images[current].alt || `gallery-modal-${current}`}
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded shadow-lg"
                  />
                </div>
                {typeof images[current].alt === 'string' && images[current].alt.trim() !== '' && (
                  <div className="mt-4 text-center text-white text-base md:text-lg bg-black/50 px-4 py-2 rounded shadow-lg border border-white/60 inline-block">
                    {images[current].alt}
                  </div>
                )}
              </>
            )}
          </div>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl px-3 py-2 bg-black/60 rounded-full hover:bg-black/90 hover:scale-110 transition-all duration-200 shadow-md border border-white/30"
            style={{ zIndex: 10 }}
            onClick={next}
            aria-label="다음 이미지"
          >
            &#8594;
          </button>
          <button
            className="absolute top-6 right-6 text-white text-3xl px-3 py-2 bg-black/60 rounded-full hover:bg-black/90 hover:scale-110 transition-all duration-200 shadow-md border border-white/30"
            style={{ zIndex: 20 }}
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

export default MarkdownGallery;
