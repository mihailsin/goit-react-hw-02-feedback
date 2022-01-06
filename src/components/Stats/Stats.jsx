import {
  List,
  Item,
  Paragraph,
  Output,
  Positive,
  Neutral,
  Negative,
  Total,
} from './Stats.styled';
import propTypes from 'prop-types';
const Stats = ({ positive, neutral, negative, total, percentOfPositives }) => {
  return (
    <List>
      <Item>
        <Paragraph>
          Good:
          <Positive> {positive}</Positive>
        </Paragraph>
      </Item>
      <Item>
        <Paragraph>
          Neutral:
          <Neutral> {neutral}</Neutral>
        </Paragraph>
      </Item>
      <Item>
        <Paragraph>
          Bad:
          <Negative> {negative}</Negative>
        </Paragraph>
      </Item>
      <Item>
        <Paragraph>
          Total:<Total> {total}</Total>
        </Paragraph>
      </Item>
      <Item>
        <Paragraph>
          Positive Feedback:
          <Output> {Math.round(percentOfPositives)}%</Output>
        </Paragraph>
      </Item>
    </List>
  );
};

Stats.propTypes = {
  positive: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  negative: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  percentOfPositives: propTypes.number.isRequired,
};

export default Stats;
