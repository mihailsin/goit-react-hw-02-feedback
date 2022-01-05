const Stats = ({ positive, neutral, negative, total, percentOfPositives }) => {
  return (
    <ul>
      <li>
        <p>
          Good:
          <span> {positive}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral:
          <span> {neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad:
          <span> {negative}</span>
        </p>
      </li>
      <li>
        <p>
          Total:<span> {total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive Feedback
          <span> {percentOfPositives}%</span>
        </p>
      </li>
    </ul>
  );
};
export default Stats;
