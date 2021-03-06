import styled from 'styled-components'

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%
`
export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  width: 584px;
  min-height: 176px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`
export const LayerCardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1 rem;
  max-width: 584px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`
export const ColumnLabel = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`
type AddItemButtonProps = {
  dark?: boolean
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radious: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52
  }
`