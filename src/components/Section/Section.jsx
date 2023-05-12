import propTypes from 'prop-types';
import StyledSection from './Section.styled';
import { H2 } from 'commonStyles/commonStyles.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <H2>{title}</H2>
      {children}
    </StyledSection>
  );
};
Section.propTypes = {
  title: propTypes.string,
};
export default Section;
