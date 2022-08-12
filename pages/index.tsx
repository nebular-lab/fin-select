import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <VStack w="full" h="100vh" bg="#fae3d9" gap="200px">
        <Text px="300px" pt="200px" fontSize="50px" whiteSpace="pre-wrap" align="center">
          {`これからあなたに合った資産運用方法を探すために3問質問します。\n所要時間は30秒です`}
        </Text>
        <Link href="/question">
          <Button px="300px" fontSize="30px" w="100px" h="100px" mt="300px">
            <Text>スタート</Text>
          </Button>
        </Link>
      </VStack>
    </>
  )
}

export default Home
