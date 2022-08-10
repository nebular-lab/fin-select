import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { QuestionProps } from './types/questionType'

export const ans: number[] = []
const Home: NextPage = () => {
  // const questionDummyData: QuestionProps = {
  //   questionId: 1,
  //   title: 'あなたの貯金額は？',
  //   select: ['~5万円', '6~20万円']
  // }
  // const questionDummyData2: QuestionProps = {
  //   questionId: 2,
  //   title: 'あなたの希望のリスク・リターン配分は？',
  //   select: [`ハイリスク\nハイリターン`, `ミドルリスク\nミドルリターン`, `ローリスク\nローリターン`]
  // }
  // const questions: QuestionProps[] = [questionDummyData, questionDummyData2]
  // console.log(questions)

  console.log(ans)
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
