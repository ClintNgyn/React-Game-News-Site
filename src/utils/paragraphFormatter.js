const paragraphFormatter = (str) => {
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

export default paragraphFormatter;
