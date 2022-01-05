const FeedbackOptions = ({ onPositive, onNeutral, onNegative }) => {
  return (
    <ul>
      <li>
        <button type="button" onClick={onPositive}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={onNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={onNegative}>
          Bad
        </button>
      </li>
    </ul>
  );
};
export default FeedbackOptions;
