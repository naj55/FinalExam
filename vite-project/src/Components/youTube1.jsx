import { React, useState, useEffect } from 'react'
import { ChakraProvider, Flex, Image, Text, Spacer, Input, Box, Button, SimpleGrid, Textarea } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import logo from '../assets/logo.jpeg'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

export default function Nav() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState([])
    const [mag, setMsg] = useState("sorry data not found")
    const Navigate = useNavigate()
    const [srcc, setsrc] = useState([])
    const [like, setLike] = useState("Like")
    const [dis, setdis] = useState("DisLike")
    useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&maxResults=15&key=AIzaSyARryq2arkNniuiIUfPFUUkQY5n6w7eo_I").then(res => {
            console.log(res.data)
            setData(res.data.items)
            console.log(data)
            console.log("search below")
            setSearch(res.data.items)
            console.log(search)
        })
    }, [])

    const ViewVrdio = (id) => {
        Navigate(`/Youtube/${id}`)
    }
    const linkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/najla-aldossari-26065a27a/'
    }
    const likeme = () => {
        setLike("You Liked it!")
        setdis("DisLike")
    }
    const disl = () => {
        setLike("Like")
        setdis("DisLike it")
    }

    return (
        <>
            {/* /////navbar for the youtube page */}
            <Flex justifyContent="center" alignItems="end" h="6em"  >
                <SimpleGrid columns={[3]} spacing='19em'>
                    <Flex justifyContent="start" >
                        <Box> <Image src={logo} w="8em" h="4em">
                        </Image>
                        </Box>
                    </Flex>

                    <Box>
                        <Flex justifyContent="start" alignItems="end" gab="1em" w="43em">
                            <Box >
                                <Input name="Search" w="33em" placeholder="search" borderRadius="23px" ml="-8em" ></Input>
                                <button ><Search2Icon ml="0.5em"></Search2Icon></button></Box>
                        </Flex>

                    </Box>
                    <Flex justifyContent="end" mr="1em">
                        <Flex justifyContent="center" >
                            <Text ml="1em">{localStorage.getItem("userName")}</Text>
                            <Button colorScheme="red" color="black" >LogOut</Button>
                        </Flex>
                    </Flex>

                </SimpleGrid>
            </Flex >

            <Flex>
                <SimpleGrid>
                    <Flex justifyContent="center" direction="column">
                        <Text>Here is my Linked in</Text>
                        <Button onClick={linkedIn}>Click Me </Button>
                    </Flex>


                    {

                        search.map((item, i) => {
                            return (
                                <div key={i}>
                                    <iframe class="youtube-player" type="text/html" width="440" height="295"
                                        src={`http://www.youtube.come/embed/owjVpYCmwcg/${item.id}`}>
                                    </iframe>
                                </div>
                            )
                        })
                    }
                    <Flex>
                        <Button onClick={likeme}>{like}</Button>
                        <Button onClick={disl}>{dis}</Button>
                        <Textarea width="20em">Comment</Textarea>
                    </Flex>
                </SimpleGrid>
            </Flex>
        </>
    )
}
