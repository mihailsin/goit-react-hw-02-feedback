import { Wrapper, Header } from './Section.styled';
const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      {children}
    </Wrapper>
  );
};
export default Section;
