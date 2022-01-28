import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Lang Tweet</Title>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: #1976d2;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin: 0;
`;
