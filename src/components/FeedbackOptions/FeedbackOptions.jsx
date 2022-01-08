import { List, Item, Button } from './FeedbackOptions.styled';
import propTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option, idx) => {
        return (
          <Item key={idx}>
            <Button type="button" value={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
