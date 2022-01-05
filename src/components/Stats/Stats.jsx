import { List, Item, Paragraph, Output } from './Stats.styled';
const Stats = ({ positive, neutral, negative, total, percentOfPositives }) => {
  return (
    <List>
      <Item>
        <Paragraph>
          Good:
          <Output> {positive}</Output>
        </Paragraph>
      </Item>
      <Item>
        <Paragraph>
          Neutral:
          <Output> {neutral}</Output>
        </Paragraph>
      </Item>
      <Item>
        <Paragraph>
          Bad:
          <Output> {negative}</Output>
        </Paragraph>
      </Item>
      <Item>
        <Paragraph>
          Total:<Output> {total}</Output>
        </Paragraph>
      </Item>
      <Item>
        <Paragraph>
          Positive Feedback
          <Output> {percentOfPositives}%</Output>
        </Paragraph>
      </Item>
    </List>
  );
};
export default Stats;
