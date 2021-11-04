import styled from '@emotion/styled';

interface IStyleProps {
  margin?: string;
}

const Input = styled.input<IStyleProps>`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 47px;
  padding: 0rem 1rem;
  margin: ${(props) => props.margin ?? '0.5rem'};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.color.bgWhite};
  border: 1.5px solid ${(props) => props.theme.color.bgWhite};

  color: ${(props) => props.theme.color.black};
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: bold;
  cursor: text;
  ${(props) => props.theme.shadow};

  :focus {
    border: 1.5px solid ${(props) => props.theme.color.primary2};
  }
`;
export default Input;