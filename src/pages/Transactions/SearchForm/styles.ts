import styled from 'styled-components'

export const SearchFromContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    color: ${(props) => props.theme['gray-300']};
    background-color: ${(props) => props.theme['gray-900']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;
    padding: 1rem;
    background: transparent;
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      border-color: ${(props) => props.theme['green-500']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
