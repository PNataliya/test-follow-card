import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ButtonBack = styled.button`
  width: 196px;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.ms};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;
  margin: 0;
  padding: 14px 20px;
  background-color: ${p => p.theme.colors.primaryButton};
  color: ${p => p.theme.colors.textButton};
  box-shadow: ${p => p.theme.shadows.button};
  border-radius: ${p => p.theme.radii.button};

  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: red;
    transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Submit = styled.button`
  width: 196px;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.ms};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;
  margin: 0;
  padding: 14px 20px;
  background-color: ${p => p.theme.colors.focusButton};
  color: ${p => p.theme.colors.textButton};
  box-shadow: ${p => p.theme.shadows.button};
  border-radius: ${p => p.theme.radii.button};

  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: red;
    transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const WrapperText = styled.div`
  display: flex;
  margin-top: 40px;
`;
export const TextForm = styled.p`
  font-size: ${p => p.theme.fontSizes.xxxs};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.min};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  margin: 0;
  color: ${p => p.theme.colors.muted};
`;

export const Register1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 498px) {
    width: 458px;
  }
`;

export const Register2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  width: 100%;
  @media screen and (min-width: 498px) {
    width: 458px;
  }
`;
