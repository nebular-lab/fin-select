import path from 'path'
import fs from 'fs'

const questionDirectory = path.join(process.cwd(), '/questions')

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(questionDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}


