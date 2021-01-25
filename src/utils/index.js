export const changeImageResolution = (imgSrc, res = 1280) => {
  imgSrc = imgSrc ?? '';
  const idx = imgSrc.lastIndexOf('media');
  return `${imgSrc.substring(0, idx)}media/resize/${res}/-${imgSrc.substring(idx + 5)}`;
};

export const paragraphFormatter = (str) => {
  const sentences = str?.split('.');
  return sentences?.map(
    (sentence, idx) =>
      idx !== sentences.length - 1 && (
        <p key={idx}>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {sentence !== '' && sentence.trim() + '.'}
          <br />
          <br />
        </p>
      ),
  );
};
