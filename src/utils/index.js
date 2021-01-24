export const changeImageResolution = (imgSrc, res = 1280) => {
  // imgSrc = imgSrc ?? '';

  const idx = imgSrc?.lastIndexOf('media');
  return `${imgSrc?.substring(0, idx)}media/resize/${res}/-${imgSrc?.substring(idx + 5)}`;
};

export const paragraphFormatter = (str) => {
  // str = str ?? '';

  console.log(str?.split('.'));
  return str?.split('.').map((sentence) => (
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;
      {sentence !== '' && sentence.trim() + '.'}
      <br />
    </p>
  ));
};
