import { Injectable } from '@angular/core';
import { EvaluationResult } from '../model/evaluationResult.model';
import { Triple } from '../model/triple.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinkCompletionService {

  constructor(private http: HttpClient) { }

  evaluate(triple: Triple) {
    return this.http.post<EvaluationResult>(`http://localhost:3000/evaluate/`, triple);
  }

  // evaluate(triple: Triple): EvaluationResult {
  //   const t = mock.find(v => triple.head === v.head && triple.relation === v.relation && triple.tail === v.tail);

  //   // const result: EvaluationResult = t ? 

  //   return {
  //     triple,
  //     passed: !!t,
  //     wikiPageHead: t ? undefined : "https://en.wikipedia.org/wiki/Solar_System",
  //     wikiPageTail: t ? undefined : "https://en.wikipedia.org/wiki/Earth"
  //   }
  // }

}

const mock: Triple[] = [
  {
    head: "solar system",
    tail: "earth",
    relation: "includes"
  },
  {
    head: "solar system",
    tail: "mars",
    relation: "includes"
  },
  {
    head: "solar system",
    tail: "planets",
    relation: "includes"
  },
  {
    head: "planets",
    tail: "mars",
    relation: "includes"
  },
  {
    head: "Concept 1",
    tail: "Concept 2",
    relation: "contains"
  }, { "head": "solar system", "tail": "mercury", "relation": "includes" },
  { "head": "solar system", "tail": "venus", "relation": "includes" },
  { "head": "solar system", "tail": "earth", "relation": "includes" }, 
  { "head": "solar system", "tail": "mars", "relation": "includes" }, 
  { "head": "solar system", "tail": "jupiter", "relation": "includes" },
   { "head": "solar system", "tail": "saturn", "relation": "includes" }, 
   { "head": "solar system", "tail": "uranus", "relation": "includes" }, 
   { "head": "solar system", "tail": "neptune", "relation": "includes" },
   {"head":"planets","tail":"mercury","relation":"includes"},{"head":"planets","tail":"venus","relation":"includes"},{"head":"planets","tail":"earth","relation":"includes"},{"head":"planets","tail":"mars","relation":"includes"},{"head":"planets","tail":"jupiter","relation":"includes"},{"head":"planets","tail":"saturn","relation":"includes"},{"head":"planets","tail":"uranus","relation":"includes"},{"head":"planets","tail":"neptune","relation":"includes"}
]