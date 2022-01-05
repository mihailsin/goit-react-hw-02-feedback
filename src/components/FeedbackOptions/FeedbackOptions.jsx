import { List, Item, Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ onPositive, onNeutral, onNegative }) => {
  return (
    <List>
      <Item>
        <Button type="button" onClick={onPositive}>
          Good
        </Button>
      </Item>
      <Item>
        <Button type="button" onClick={onNeutral}>
          Neutral
        </Button>
      </Item>
      <Item>
        <Button type="button" onClick={onNegative}>
          Bad
        </Button>
      </Item>
    </List>
  );
};
export default FeedbackOptions;
