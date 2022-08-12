import QuestionProps from '../types/questionType'

export const questionDatas: QuestionProps[] = [
  {
    id: 0,
    title: 'あなたの運用可能資金はいくらですか？',
    choices: ['5万円未満', '5万円~50万円', '50万円以上'],
    isLast: false
  },
  {
    id: 1,
    title: 'どのようなリスク・リターン関係の運用方法に興味がありますか？',
    choices: ['ローリスク\nローリターン', 'ミドルリスク\nミドルリターン', 'ハイリスク\nハイリターン\n'],
    subChoices: ['安定を求める方', 'ある程度のリターンを求める方', '挑戦が好きな方'],
    isLast: false
  },
  {
    id: 2,
    title: '以下の選択肢のうち重視したいことは？',
    choices: ['手元にいつでも資産が戻ってきてほしい', '老後の資金を確保したい'],
    isLast: true
  },
  {
    id: 3,
    title: '以下の選択肢のうち何を重視しますか？',
    choices: ['手元にいつでも資産が戻ってきてほしい', '老後の資金を\n確保したい', 'ローリスクが\n何よりも大切'],
    isLast: true
  },
  {
    id: 4,
    title: '以下の選択肢のうち何を重視しますか？',
    choices: ['プロに投資先を選んでほしい', '自分で投資先を選びたい'],
    isLast: true
  },
  {
    id: 5,
    title: '以下の選択肢のうち何を重視しますか？',
    choices: ['プロに投資先を\n選んでほしい', '自分で投資先を\n選びたい', '不労所得を得たい', '簡単に出来る'],
    isLast: true
  },
  {
    id: 6,
    title: '以下の選択肢のうち何を重視しますか？',
    choices: ['小さい元手から始めたい', '価格変動が大きい取引をしたい'],
    isLast: true
  }
]
