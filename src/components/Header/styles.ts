import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  border-radius: 6px;
  padding: 0 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['green-500']};

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
