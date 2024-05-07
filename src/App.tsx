import { TextField } from '@mui/material'
import { useRef, useState } from 'react'
import { Root, CaretModal, InputWrapper } from './styles'

function App() {
  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)
  const [cursor, setCursor] = useState(0)
  const ref = useRef(null)

  const calculatePosition = (position: number | null) => Math.min(position ?? 0, 22) * 10

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value)
    if (event.target.value === '') {
      setShow(false)
      return
    }
    setShow(true)
    return
  }

  const handlePosition = (event: React.SyntheticEvent<HTMLDivElement, Event>) => {
    const target = event.target as HTMLTextAreaElement
    setCursor(calculatePosition(target.selectionStart))
  }

  const handleFocus = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value === '') return setShow(false)
    setCursor(calculatePosition(event.target.selectionStart))
    setShow(true)
  }

  return (
    <Root>
      <InputWrapper>
        <TextField
          id='outlined-basic'
          label='Example'
          variant='outlined'
          ref={ref}
          value={value}
          onChange={handleChange}
          onKeyDown={handlePosition}
          onFocus={handleFocus}
          onBlur={() => setShow(false)}
        />
        {show && <CaretModal cursor={cursor}>-DropDown-</CaretModal>}
      </InputWrapper>
    </Root>
  )
}

export default App
