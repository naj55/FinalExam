import { React, useState, useEffect } from 'react'
import { ChakraProvider, Flex, Image, Text, Spacer, Input, Box, Button, SimpleGrid } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import logo from '../assets/logo.jpeg'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

export default function yotube() {
    let id = useParams();
    console.log(id)
    return (
        <div>yotube</div>
    )
}
