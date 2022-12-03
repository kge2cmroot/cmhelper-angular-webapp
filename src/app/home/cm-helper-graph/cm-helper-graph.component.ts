import { Component, Input, OnInit } from '@angular/core';
import { Edge, Node } from '@swimlane/ngx-graph';
import { ExerciseService } from 'src/app/service/exercise.service';

@Component({
  selector: 'app-cm-helper-graph',
  templateUrl: './cm-helper-graph.component.html',
  styleUrls: ['./cm-helper-graph.component.scss']
})
export class CmHelperGraphComponent implements OnInit {

  constructor(private exerciseService: ExerciseService) { }

  @Input ()
   nodes: Node[] = []
  @Input()
   edges: Edge[] = []

  ngOnInit(): void {

    
    
  }

}
