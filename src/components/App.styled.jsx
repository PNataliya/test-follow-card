import styled from '@emotion/styled';

export const Main = styled.main`
  min-height: calc(100vh - 100px);
`;

export const Section = styled.section`
  min-height: 100vh;

  background-color: ${p => p.theme.colors.background};
  margin: 0 auto;
  padding: 100px 0;

  @media screen and (min-width: 768px) {
    padding-top: 169px;
    padding-bottom: 266px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 114px;
    padding-bottom: 113px;
  }
`;
