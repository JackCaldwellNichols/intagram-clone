import { Input, Button, Alert, AlertIcon } from "@chakra-ui/react"
import { useState } from "react"
import useLogin from "../../hooks/useLogin"

const Login = () => {

  const {signin, loading, error} = useLogin()

  const [inputs, setInputs] = useState({
      email: "",
      password: '', 
  })

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
          placeholder="Password"
          type="password"
          fontSize={14}
          value={inputs.password}
          onChange={(e)=>setInputs({...inputs, password:e.target.value})}
          size={'sm'}
          />
             {error && (
        <Alert status="error" fontSize={13}>
          <AlertIcon />
          {error.message}
        </Alert>
      )}
        <Button w={'full'} colorScheme="blue" size={'sm'} fontSize={14} onClick={() => signin(inputs)} isLoading={loading}>
            Login
        </Button>
    </>
  )
}

export default Login