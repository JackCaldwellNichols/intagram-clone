import { useState } from "react"
import {Alert, AlertIcon, Button, Input, InputGroup, InputRightElement} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword"

const SignUp = () => {

  const [inputs, setInputs] = useState({
    email: "",
    fullName: '',
    username: '',
    password: '', 

})
  const [showPassword, setShowPassword] = useState(false)
  const {loading, error, signup} = useSignUpWithEmailAndPassword()
  return (
    <>
     <Input 
        placeholder="Email"
        type="email"
        fontSize={14}
        value={inputs.email}
        onChange={(e)=>setInputs({...inputs, email:e.target.value})}
        size={'sm'}
        />
     <Input 
        placeholder="Username"
        type="text"
        fontSize={14}
        value={inputs.username}
        onChange={(e)=>setInputs({...inputs, username:e.target.value})}
        size={'sm'}
        />
     <Input 
        placeholder="Full Name"
        type="text"
        fontSize={14}
        value={inputs.fullName}
        onChange={(e)=>setInputs({...inputs, fullName:e.target.value})}
        size={'sm'}
        />

      <InputGroup>
        <Input 
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          fontSize={14}
          value={inputs.password}
          onChange={(e)=>setInputs({...inputs, password:e.target.value})}
          size={'sm'}
        />
        <InputRightElement h={'full'}>
          <Button variant={'ghost'} size={'sm'} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {error && (
        <Alert status="error" fontSize={13}>
          <AlertIcon />
          {error.message}
        </Alert>
      )}
        <Button w={'full'} colorScheme="blue" size={'sm'} fontSize={14} isLoading={loading} onClick={() => signup(inputs)}>
            Sign Up
        </Button>
    </>
  )
}

export default SignUp