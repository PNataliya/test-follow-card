import styled from "@emotion/styled";

export const WrapperCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${(p) => p.theme.space[9]};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
  }
`;

export const List = styled.li`
  width: 380px;
  height: 460px;
  display: block;
  padding: 10px;
  border-radius: 3% 3% 2% 2%;
  overflow: hidden;
  background: ${(p) => p.theme.colors.gradientBackground};
  box-shadow: ${(p) => p.theme.shadows.card};

  @media screen and (min-width: 768px) {
    padding: 0;
  }

  @media screen and (min-width: 1280px) {
    flex: none;
  }
`;
