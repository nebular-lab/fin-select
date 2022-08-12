interface QuestionProps {
  id: number
  title: string
  choices: [c1: string, c2: string, c3?: string, c4?: string]
  subChoices?: [c1: string, c2: string, c3?: string, c4?: string]
  isLast: boolean
}

export default QuestionProps
