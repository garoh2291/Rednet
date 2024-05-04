"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

interface ImageWrapperProps {
  images: any[];
}

export const ImageWrapper: React.FC<ImageWrapperProps> = ({ images = [] }) => {
  const [currentImage, setCurrentImage] = useState(images[0].src);

  const setCurrentImageHandler = (src: string) => {
    setCurrentImage(src);
  };

  const otherImages = useMemo(
    () => images.filter((image) => image.src !== currentImage),
    [images, currentImage]
  );

  return (
    <div className="w-[607px] ">
      <div className="w-full h-[510px] relative">
        <Image src={currentImage} alt="image" layout="fill" objectFit="cover" />
      </div>
      {otherImages.length && (
        <div className="mt-6 w-full flex h-[107px] overflow-x-auto gap-[19px]">
          {otherImages.map((image, index) => (
            <div
              key={index}
              className="min-w-[190px] w-[190px] h-[107px] relative cursor-pointer"
              onClick={() => setCurrentImageHandler(image.src)}
            >
              <Image
                src={image.src}
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
