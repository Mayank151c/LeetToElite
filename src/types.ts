export type Problem = {
  id: number,
  title: string,
  desc: string,
  solutions: Solution[]
}

export type Solution = {
  title: string,
  approach: string,
  code: string
}