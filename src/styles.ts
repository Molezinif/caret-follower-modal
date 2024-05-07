import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const InputWrapper = styled.div`
  position: relative;
`

const CaretModal = styled.div<{ cursor: number }>`
  width: 210px;
  height: 210px;
  background-color: white;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  position: absolute;
  top: 40px;
  left: ${(props) => props.cursor + 'px'};
`

export { Root, InputWrapper, CaretModal }
