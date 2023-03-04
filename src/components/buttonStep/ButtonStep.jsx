import {
  Wrapper,
  ButtonBack,
  Submit,
  Register1,
  Register2,
} from 'components/buttonStep/ButtonStep.styled';

export default function ButtonStep(props) {
  return (
    <Wrapper>
      <Register1>
        <Submit type="submit" name="register">
          {props.isLastStep ? 'Register' : 'Next'}
        </Submit>
      </Register1>
      <Register2>
        {props.hasPrevious && (
          <ButtonBack type="button" name="back" onClick={props.onBackClick}>
            Back
          </ButtonBack>
        )}
      </Register2>
    </Wrapper>
  );
}
