const FeedbackOptions = ({ onPositive, onNeutral, onNegative }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
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
    </div>
  );
};
export default FeedbackOptions;
