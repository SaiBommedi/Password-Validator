import {useState} from 'react'

import {
  BgContainer,
  PasswordContainer,
  Heading,
  ParaEl,
  InputEl,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, newInput] = useState('')
  const [isError, errorUpdate] = useState(true)

  const passwordInputChanged = event => {
    const userInputLength = userInput.length
    if (userInputLength < 8) {
      errorUpdate(true)
      newInput(event.target.value)
    } else {
      errorUpdate(false)
      newInput(event.target.value)
    }
  }
  return (
    <BgContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <ParaEl>Check how strong and secure is your password</ParaEl>
        <InputEl type="password" onChange={passwordInputChanged} />
        {isError && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordContainer>
    </BgContainer>
  )
}

export default PasswordValidator
