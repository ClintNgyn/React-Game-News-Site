export const cropImage = (imgSrc, size = 1280) => {
  imgSrc = imgSrc ?? '';

  const idx = imgSrc.lastIndexOf('media');
  return `${imgSrc.substring(0, idx)}media/resize/${size}/-${imgSrc.substring(idx + 5)}`;
};
