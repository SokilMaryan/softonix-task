/*
  Переписати тип TUnified наступним чином.
  Він повинен взяти всі поля з IFirst, з ISecond лише поле 'd', з IThird все окрім поля 'h'
*/

interface IFirst {
  a?: number
  b?: string
  c?: string
}

interface ISecond {
  d: string
  e: number
  f: number
}

interface IThird {
  g: boolean
  h: string
  i: number
}

// type TUnified = IFirst & Omit <ISecond,'e' | 'f' > & Omit <IThird, 'g' | 'i'>
type TUnified = IFirst & Pick <ISecond,'d' > & Pick <IThird, 'h'>

// const check: TUnified = {
//   a: 1,
//   b: '',
//   c: '',
//   d: '',
//   h: 1  // string 
// }

export {
  type TUnified
}
