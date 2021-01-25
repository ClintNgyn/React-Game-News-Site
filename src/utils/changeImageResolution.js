const changeImageResolution = (imgSrc, res = 1280) => {
  imgSrc = imgSrc ?? '';
  const idx = imgSrc.lastIndexOf('media');
  return `${imgSrc.substring(0, idx)}media/resize/${res}/-${imgSrc.substring(idx + 5)}`;
};

export default changeImageResolution;
