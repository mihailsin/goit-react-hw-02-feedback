import { Wrapper, Header } from './Section.styled';
import propTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Section;
