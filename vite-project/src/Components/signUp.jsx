import { React, useState, useEffect } from 'react'
import { ChakraProvider, Flex, Image, Spacer, Input, Box, Button, Stack, Heading } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import logo from '../assets/logo.jpeg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function signUp() {
    const [myuserName, setUser] = useState("")
    const [myemail, setEmail] = useState("")
    const [mypassword, setPass] = useState("")
    const Navigate = useNavigate()

    let nameloged = localStorage.getItem("userName")


    const mySignUp = () => {
        if (myuserName === "" || myemail === "" || mypassword === "") {
            console.log("ell")
            alert("please fill data")

        } else {
            let userName = localStorage.setItem("userName", myuserName)
            let email = localStorage.setItem("email", myemail)
            let password = localStorage.setItem("password", mypassword)
            Navigate(`/Youtube`)
        }
    }

    return (
        <div>
            {
                <Flex justifyContent="center" mt="10em" >
                    <Flex justifyContent="center" alignItems="center" direction="column">
                        <Heading> Sign UP</Heading>
                        <Flex bg="gray.300" w="30em" h="20em" justifyContent="center" alignItems="center" mt="2em" borderRadius="2em">
                            <Stack spacing={4} w="20em">
                                <Input name="myuserName" placeholder='user Name' onChange={e => setUser(e.target.value)}></Input>
                                <Input name="myemail" placeholder='email' onChange={e => setEmail(e.target.value)}></Input>
                                <Input name="mypassword" type="password" placeholder='password' onChange={e => setPass(e.target.value)}></Input>
                                <Button colorScheme="red" onClick={() => mySignUp()}>Sign Up</Button>
                            </Stack>

                        </Flex>
                    </Flex>
                </Flex>
            }

        </div>
    )

}
