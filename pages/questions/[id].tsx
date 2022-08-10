import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { ans } from '..'

export async function getStaticProps({ params }: { params: any }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`)
  const data = await req.json()
  return {
    props: {
      question: data
    }
  }
}
export async function getStaticPaths() {
  const paths = []
  for (let i = 1; i <= 5; i++) {
    paths.push({ params: { id: `q${i}` } })
  }
  return { paths, fallback: false }
}

const Question = ({ question }: { question: any }) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <VStack>
      <Text px="300px" pt="200px" fontSize="30px" whiteSpace="pre-wrap">
        {question.title}
      </Text>
      <HStack gap="40px" pt="300px">
        {question.select.map((s: any, index: number) => {
          return (
            <Link key={s} href={`/questions/q${question.id + 1}`}>
              <Button
                w="300px"
                h="200px"
                fontSize="30px"
                bg="yellow"
                whiteSpace="pre-wrap"
                onClick={() => {
                  ans.push(index)
                  console.log(ans)
                }}
              >
                {s}
              </Button>
            </Link>
          )
        })}
      </HStack>
    </VStack>
  )
}

export default Question
