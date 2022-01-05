const Stats = ({ positive, neutral, negative }) => {
  return (
    <div>
      <h2>Statistics</h2>
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
      </ul>
    </div>
  );
};
export default Stats;
