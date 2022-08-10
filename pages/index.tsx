import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <VStack>
        <Text px="300px" pt="200px" fontSize="30px">
          これから10問の問題を出します
        </Text>
        <Link href="/question">
          <Button px="300px" fontSize="30px" w="100px" h="100px">
            スタート
          </Button>
        </Link>
      </VStack>
    </>
  )
}

export default Home
