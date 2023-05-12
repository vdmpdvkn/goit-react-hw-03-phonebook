import styled from '@emotion/styled';
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  margin-top: 20px;
  width: 340px;
  & > li {
    display: flex;
    width: 320px;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;
export default StyledUl;
