

import { Tooltip, Button, Box, Modal, ModalBody, ModalOverlay, ModalContent,  ModalHeader, ModalCloseButton, useDisclosure, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { IoIosSearch } from "react-icons/io";
import { useRef } from "react";
import useSearchUser from "../../hooks/useSearchUser";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";

const Search = () => {

const searchRef = useRef()
const { isOpen, onOpen, onClose } = useDisclosure()
const {loading, searchedUser, getUserProfile, setSearchedUser} = useSearchUser()

const handleSeachUser = (e) => {
    e.preventDefault()
    getUserProfile(searchRef.current.value)
    
}



  return (
    <>
    <Tooltip hasArrow label={'Search'} placement="right"  ml={1} openDelay={500} display={{base: 'block', md: 'none'}}>
    <Flex cursor={'pointer'}  onClick={onOpen} display={'flex'} alignItems={'center'} gap={4} _hover={{bg:'whiteAlpha.400'}} borderRadius={6} p={2} w={{base: 10, md: 'full'}} justifyContent={{base: 'center', md: 'flex-start'}}>
      <IoIosSearch size={20}/>
      <Box display={{base: 'none', md: 'block'}}>Search</Box>
    </Flex>
  </Tooltip>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
                <ModalContent>
                <ModalHeader>Search User</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                <form onSubmit={handleSeachUser}>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input placeholder="Search users" ref={searchRef}/>
                    </FormControl>
                    <Button type="submit" ml={'auto'} size={'sm'} my={4} isLoading={loading}>
                        Search
                    </Button>
                </form>
                {searchedUser && ( <SuggestedUser user={searchedUser} setSearchedUser={setSearchedUser}/>)}
                </ModalBody>
                </ModalContent>
                
        </Modal>
</>
  )
}

export default Search