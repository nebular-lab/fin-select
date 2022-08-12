export {}
import { Button, Fade, HStack, ScaleFade, Slide, SlideFade, Text, useDisclosure, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react'
import { setTimeout } from 'timers'
import { ans } from '../public/const'
import { questionDatas } from '../public/questionData'
import QuestionProps from '../types/questionType'

//2つの配列を比較するための関数
export function array_equal(a: number[], b: number[]) {
  if (!Array.isArray(a)) return false
  if (!Array.isArray(b)) return false
  if (a.length != b.length) return false
  for (var i = 0, n = a.length; i < n; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

//質問ページの構成

const Question = () => {
  const questions: QuestionProps[] = questionDatas
  const [title, setTitle] = useState<string>(questions[0].title)
  const [choices, setChoices] = useState<[c1: string, c2: string, c3?: string, c4?: string]>(questions[0].choices)
  const [questionNum, setQuestionNum] = useState(0)
  let nextQuestion: number

  //回答ボタンをクリックしたらその回答を配列に保存し、過去の質問への回答を元に、次の質問に移る
  const onClick = (index: number) => {
    ans.push(index)
    if (questions[questionNum].isLast || array_equal(ans, [0, 2])) return Router.push('/final')
    onClose()
    if (array_equal(ans, [0])) nextQuestion = 1
    if (array_equal(ans, [1])) nextQuestion = 1
    if (array_equal(ans, [2])) nextQuestion = 1
    if (array_equal(ans, [0, 0])) nextQuestion = 2
    if (array_equal(ans, [1, 0])) nextQuestion = 3
    if (array_equal(ans, [2, 0])) nextQuestion = 3
    if (array_equal(ans, [0, 1])) nextQuestion = 4
    if (array_equal(ans, [1, 1])) nextQuestion = 4
    if (array_equal(ans, [2, 1])) nextQuestion = 5
    if (array_equal(ans, [1, 2])) nextQuestion = 6
    if (array_equal(ans, [2, 2])) nextQuestion = 6

    setTimeout(() => {
      setTitle(questions[nextQuestion].title)
      setChoices(questions[nextQuestion].choices)
      setQuestionNum(nextQuestion)
      onOpen()
    }, 200)
  }
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true })
  return (
    <VStack w="full" h="100vh" bg="#fae3d9">
      <SlideFade reverse={false} in={isOpen} offsetX="500px">
        <VStack pt="200px">
          <Text fontSize="40px" whiteSpace="pre-wrap">
            {title}
          </Text>
          <HStack gap="40px" pt="150px">
            {choices.map((c, index) => {
              return (
                <Button
                  key={c}
                  w="330px"
                  h="200px"
                  fontSize="30px"
                  bg="#8ac6d1"
                  borderColor="#8ac6d1"
                  borderWidth="2px"
                  whiteSpace="pre-wrap"
                  onClick={() => onClick(index)}
                >
                  <Text>{c}</Text>
                </Button>
              )
            })}
          </HStack>
        </VStack>
      </SlideFade>
    </VStack>
  )
}

export default Question
