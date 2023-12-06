import { useToast } from "@chakra-ui/react"

const useShowToast = () => {
    const toast = useToast()
    const showToast = (title, desc, status) => {
        toast({
            title: title,
            description: desc,
            status: status,
            duration: 3000,
            isClosable: true
        })
    }   
  return showToast
}

export default useShowToast