import { List, Item, Button } from './FeedbackOptions.styled';
import propTypes from 'prop-types';
const FeedbackOptions = ({ onFeedback }) => {
  return (
    <List>
      <Item>
        <Button type="button" onClick={onFeedback}>
          Good
        </Button>
      </Item>
      <Item>
        <Button type="button" onClick={onFeedback}>
          Neutral
        </Button>
      </Item>
      <Item>
        <Button type="button" onClick={onFeedback}>
          Bad
        </Button>
      </Item>
    </List>
  );
};

FeedbackOptions.propTypes = {
  onFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
