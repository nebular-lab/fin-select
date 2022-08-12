import { Box, Flex, HStack, Link, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ans, bookLinkData, bookNames, classedHowFin, descriptionData } from '../public/const'
import { array_equal } from './question'
let yourHow: string
//let desText: string
const Final = () => {
  const [desText, setDesText] = useState('')
  const [bookText, setBookText] = useState('')
  const [bookLink, setBookLink] = useState('')
  //console.log(bookLinkData)

  useEffect(() => {
    // //NISA
    if (array_equal(ans, [0, 0, 0]) || array_equal(ans, [1, 0, 0]) || array_equal(ans, [2, 0, 0])) {
      yourHow = classedHowFin[0][0][0]
      setDesText(descriptionData[0][0][0])
      setBookText(bookNames[0][0][0])
      setBookLink(bookLinkData[0][0][0])
    }

    //iDeCo
    if (array_equal(ans, [0, 0, 1]) || array_equal(ans, [1, 0, 1]) || array_equal(ans, [2, 0, 1])) {
      yourHow = classedHowFin[0][0][1]
      setDesText(descriptionData[0][0][1])
      setBookText(bookNames[0][0][1])
      setBookLink(bookLinkData[0][0][1])
    }

    //債権
    if (array_equal(ans, [1, 0, 2]) || array_equal(ans, [2, 0, 2])) {
      yourHow = classedHowFin[0][1][0]
      setDesText(descriptionData[0][1][0])
      setBookText(bookNames[0][1][0])
      setBookLink(bookLinkData[0][1][0])
    }

    //投資信託
    if (array_equal(ans, [0, 1, 0]) || array_equal(ans, [1, 1, 0]) || array_equal(ans, [2, 1, 0])) {
      yourHow = classedHowFin[1][0][0]
      setDesText(descriptionData[1][0][0])
      setBookText(bookNames[1][0][0])
      setBookLink(bookLinkData[1][0][0])
    }

    //株式投資
    if (array_equal(ans, [0, 1, 1]) || array_equal(ans, [1, 1, 1]) || array_equal(ans, [2, 1, 1])) {
      yourHow = classedHowFin[1][0][1]
      setDesText(descriptionData[1][0][1])
      setBookText(bookNames[1][0][1])
      setBookLink(bookLinkData[1][0][1])
    }

    //不動産
    if (array_equal(ans, [2, 1, 2])) {
      yourHow = classedHowFin[1][2][0]
      setDesText(descriptionData[1][2][0])
      setBookText(bookNames[1][2][0])
      setBookLink(bookLinkData[1][2][0])
    }

    //外資預金
    if (array_equal(ans, [2, 1, 3])) {
      yourHow = classedHowFin[1][2][1]
      setDesText(descriptionData[1][2][1])
      setBookText(bookNames[1][2][1])
      setBookLink(bookLinkData[1][2][1])
    }

    //FX
    if (array_equal(ans, [0, 2]) || array_equal(ans, [1, 2, 0]) || array_equal(ans, [2, 2, 0])) {
      yourHow = classedHowFin[2][0][0]
      setDesText(descriptionData[2][0][0])
      setBookText(bookNames[2][0][0])
      setBookLink(bookLinkData[2][0][0])
    }

    //仮想通過
    if (array_equal(ans, [1, 2, 1]) || array_equal(ans, [2, 2, 1])) {
      yourHow = classedHowFin[2][1][0]
      setDesText(descriptionData[2][1][0])
      setBookText(bookNames[2][1][0])
      setBookLink(bookLinkData[2][1][0])
    }
  }, [])

  return (
    <>
      <VStack h="100vh" bg="#fae3d9" px="200px" pt="50px" gap="10px">
        <Flex>
          <Text fontSize="50px">あなたは</Text>
          <Text fontSize="50px" fontWeight="bold">
            {`「${yourHow}」`}
          </Text>
          <Text fontSize="50px">が向いています</Text>
        </Flex>
        <Box bg="gray.100" borderRadius="10px" p="5px" h="35%" w="50%">
          <Text fontSize="15px" whiteSpace="pre-wrap" lineHeight="20px">
            {desText}
          </Text>
          <Link href={bookLink} target="_blank">
            <Text fontSize="20px" whiteSpace="pre-wrap" lineHeight="20px" textDecoration="underline">
              {bookText}
            </Text>
          </Link>
        </Box>
        <Text fontSize="40px">↓他にも気になる資産運用方式を調べてみよう↓</Text>
        <Table border="2px" fontSize="20px" size="xl" bg="gray.100">
          <Thead>
            <Tr h="80px">
              <Th></Th>
              <Th
                borderLeft="2px"
                borderBottom="2px"
                borderColor="black"
                textAlign="center"
                borderRightColor="black"
                borderRightWidth="2px"
                borderRightStyle="dotted"
              >
                ローリスク・ローリターン
              </Th>
              <Th
                borderBottom="2px"
                borderColor="black"
                textAlign="center"
                borderRightColor="black"
                borderRightWidth="2px"
                borderRightStyle="dotted"
              >
                ミドルリスク・ミドルリターン
              </Th>
              <Th borderBottom="2px" borderColor="black" textAlign="center">
                ハイリスク・ハイリターン
              </Th>
            </Tr>
          </Thead>
          <Tbody borderWidth="2px" borderColor="black">
            <Tr h="80px" borderBottom="black" borderBottomStyle="dotted" borderBottomWidth="2px">
              <Th borderTop="2px" borderRight="2px" borderRightColor="black" textAlign="center">
                〜5万円
              </Th>
              <Td textAlign="center" m="0" borderRightColor="black" borderRightWidth="2px" borderRightStyle="dotted">
                <Text
                  id="000"
                  _hover={{ bg: '#FFDBA4' }}
                  cursor="pointer"
                  textDecoration="underline"
                  color="gray.600"
                  onClick={(event: any) => {
                    setDesText(descriptionData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                    setBookText(bookNames[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                    setBookLink(bookLinkData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                  }}
                >
                  つみたてNISA
                </Text>
                <Text
                  id="001"
                  _hover={{ bg: '#FFDBA4' }}
                  cursor="pointer"
                  textDecoration="underline"
                  color="gray.600"
                  onClick={(event: any) => {
                    setDesText(descriptionData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                    setBookText(bookNames[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                    setBookLink(bookLinkData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                  }}
                >
                  iDeCo
                </Text>
              </Td>
              <Td textAlign="center" borderRightColor="black" borderRightWidth="2px" borderRightStyle="dotted">
                <Text
                  id="100"
                  _hover={{ bg: '#FFDBA4' }}
                  cursor="pointer"
                  textDecoration="underline"
                  color="gray.600"
                  onClick={(event: any) => {
                    setDesText(descriptionData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                    setBookText(bookNames[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                    setBookLink(bookLinkData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                  }}
                >
                  投資信託
                </Text>
                <Text
                  id="101"
                  _hover={{ bg: '#FFDBA4' }}
                  cursor="pointer"
                  textDecoration="underline"
                  color="gray.600"
                  onClick={(event: any) => {
                    setDesText(descriptionData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                    setBookText(bookNames[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                    setBookLink(bookLinkData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                  }}
                >
                  株式投資
                </Text>
              </Td>
              <Td
                id="200"
                textAlign="center"
                _hover={{ bg: '#FFDBA4' }}
                cursor="pointer"
                textDecoration="underline"
                color="gray.600"
                onClick={(event: any) => {
                  setDesText(descriptionData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                  setBookText(bookNames[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                  setBookLink(bookLinkData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                }}
              >
                FX
              </Td>
            </Tr>
            <Tr h="80px" borderBottom="black" borderBottomStyle="dotted" borderBottomWidth="2px">
              <Th borderRight="2px" borderRightColor="black" textAlign="center">
                〜50万円
              </Th>
              <Td
                id="010"
                textAlign="center"
                _hover={{ bg: '#FFDBA4' }}
                cursor="pointer"
                textDecoration="underline"
                color="gray.600"
                borderRightColor="black"
                borderRightWidth="2px"
                borderRightStyle="dotted"
                onClick={(event: any) => {
                  setDesText(descriptionData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                  setBookText(bookNames[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                  setBookLink(bookLinkData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                }}
              >
                債権
              </Td>
              <Td borderRightColor="black" borderRightWidth="2px" borderRightStyle="dotted"></Td>
              <Td
                id="210"
                textAlign="center"
                _hover={{ bg: '#FFDBA4' }}
                cursor="pointer"
                textDecoration="underline"
                color="gray.600"
                onClick={(event: any) => {
                  setDesText(descriptionData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                  setBookText(bookNames[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                  setBookLink(bookLinkData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                }}
              >
                仮想通貨
              </Td>
            </Tr>
            <Tr h="80px">
              <Th borderRight="2px" borderRightColor="black" textAlign="center">
                50万円〜
              </Th>
              <Td borderRightColor="black" borderRightWidth="2px" borderRightStyle="dotted"></Td>
              <Td textAlign="center" borderRightColor="black" borderRightWidth="2px" borderRightStyle="dotted">
                <Text
                  id="120"
                  _hover={{ bg: '#FFDBA4' }}
                  cursor="pointer"
                  textDecoration="underline"
                  color="gray.600"
                  onClick={(event: any) => {
                    setDesText(descriptionData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                    setBookText(bookNames[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                    setBookLink(bookLinkData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                  }}
                >
                  不動産
                </Text>
                <Text
                  id="121"
                  _hover={{ bg: '#FFDBA4' }}
                  cursor="pointer"
                  textDecoration="underline"
                  color="gray.600"
                  onClick={(event: any) => {
                    setDesText(descriptionData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                    setBookText(bookNames[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                    setBookLink(bookLinkData[event.target.id[0]][event.target.id[1]][event.target.id[2]])
                  }}
                >
                  外資預金
                </Text>
              </Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
    </>
  )
}

export default Final
