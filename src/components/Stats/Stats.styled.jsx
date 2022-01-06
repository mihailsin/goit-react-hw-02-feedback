import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;

  padding: 0;
`;

const Item = styled.li`
  list-style: none;
`;
const Paragraph = styled.p``;
const Output = styled.span`
  color: ${props => {
    if (props.children[1] < 50) {
      return `#e41212`;
    } else if (props.children[1] < 75) {
      return `#d4e914`;
    } else return `#14e949`;
  }};
`;
const Positive = styled.span`
  color: #14e949;
`;
const Neutral = styled.span`
  color: #d4e914;
`;
const Negative = styled.span`
  color: #e41212;
`;
const Total = styled.span`
  color: #81a4e4;
`;
export { List, Item, Paragraph, Output, Positive, Neutral, Negative, Total };
