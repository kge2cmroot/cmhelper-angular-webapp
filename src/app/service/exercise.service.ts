import { Injectable } from '@angular/core';
import { Exercise } from '../model/exercise.model';
import { Exercises } from '../model/exercises.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) { }
  
  mockData = {
    "exercises": [
        {
            "id": "900f5bfe-39d1-41e8-b988-111e30fe6fd5",
            "title": "Solar System",
            "argument" : "A concepts map on Solar System",
            "concepts": ["solar system", "planets", "mercury","venus","earth","mars","jupiter","saturn","uranus","neptune","sun"]
        },
        {
            "id": "110c58b2-8a0f-4b4e-8d95-e37eeb05a415",
            "title": "The Volcanoes",
            "argument" : "The volcanoes description",
            "concepts": ["solar system", "planets", "mars", "earth"]
        },
        {
          "id": "110c58b2-8a0f-4b4e-8d95-e37eeb05a416",
          "title": "Title CM 2",
          "argument" : "Argument CM 2",
          "concepts": ["Concept 1", "Concept 2", "Concept 3", "Concept 4", "Concept 5"]
      }

    ]
}

  getExercises(): Exercises {
    return this.mockData;
  }

  getExercise(id: string) {
    return this.http.get<Exercise>(`http://localhost:3000/contentmapexercises/${id}`);
  }
}
