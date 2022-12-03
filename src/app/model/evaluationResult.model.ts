import { Triple } from "./triple.model";



export interface EvaluationResult {
  head: string,
  relation: string,
  tail: string,
  passed: boolean,
  wikiPageHead?: string,
  wikiPageTail?: string
}