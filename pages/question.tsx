export {}
import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react'
import { questionDatas } from '../public/questionData'
import { QuestionProps } from './types/questionType'

const Question = () => {
  const questions: QuestionProps[] = questionDatas
  const [title, setTitle] = useState<string>(questions[0].title)
  const [choices, setChoices] = useState<[c1: string, c2: string, c3?: string]>(questions[0].choices)
  const [questionNum, setQuestionNum] = useState(0)
  const onClick = () => {
    console.log(questionNum)
    if (questionNum === 4) return Router.push('/final')
    setTitle(questions[questionNum + 1].title)
    setChoices(questions[questionNum + 1].choices)
    setQuestionNum(questionNum + 1)
  }
  return (
    <VStack>
      <Text px="300px" pt="200px" fontSize="30px" whiteSpace="pre-wrap">
        {title}
      </Text>
      <HStack gap="40px" pt="300px">
        {choices.map((c) => {
          return (
            <Button
              key={c}
              w="300px"
              h="200px"
              fontSize="30px"
              bg="greenyellow"
              whiteSpace="pre-wrap"
              onClick={onClick}
            >
              {c}
            </Button>
          )
        })}
      </HStack>
    </VStack>
  )
}

export default Question
