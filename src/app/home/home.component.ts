import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Edge, Node } from '@swimlane/ngx-graph';
import { iif, mergeMap } from 'rxjs';
import { NodesColor } from '../costant/node-color.const';
import { EvaluationResult } from '../model/evaluationResult.model';
import { Exercise } from '../model/exercise.model';
import { Links } from '../model/links.model';
import { Triple } from '../model/triple.model';
import { ExerciseService } from '../service/exercise.service';
import { LinkCompletionService } from '../service/link-completion.service';
import { LinksDictionaryService } from '../service/links-dictionary.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private exerciseService: ExerciseService, private linksDictionaryService: LinksDictionaryService,
    private linkCompletionService: LinkCompletionService, public dialog: MatDialog) { }

  showMessage = false;

  nodes: Node[] = []
  edges: Edge[] = []
  loading = true
  exercise: Exercise = {
    title: "",
    argument: "",
    concepts: [],

  }
  links: Links = {}

  ngOnInit(): void {

    this.exerciseService.getExercise("900f5bfe-39d1-41e8-b988-111e30fe6fd5")
    .subscribe(r => {
      this.exercise = r;
      this.nodes = this.exercise.concepts.map(v => {
        return {
          id: v,
          label: v,
          data: { customColor: NodesColor.primary }
        } as Node
      })
     this.linksDictionaryService.getLinks().subscribe(linksResulted => {
      this.links = linksResulted
      this.loading = false
      
      console.log(this.nodes)
     })
  
  
    })

    

  }


  doEvaluate(triple: Triple) {
    this.linkCompletionService.evaluate(triple)
      .subscribe(v=> {
        if(v.passed) {
          this.success(v)
        } else {
          this.error(v)
        }

      })

  }

  inputChanges(triple: Triple) {
    this.nodes = this.nodes.map(v => {
      if (v.label === triple.head || v.label === triple.tail) {
        v = { ...v, data: { customColor: NodesColor.selected } }
      } else if(v.data.customColor !== NodesColor.success) {
        v = { ...v, data: { customColor: NodesColor.primary } }
      }
      return v;
    })


  }

  private success(evaluationResult: EvaluationResult) {
    this.openSuccessDialog(evaluationResult)
    this.addEdges(evaluationResult)

    this.nodes = this.nodes.map(v => {
      if (v.label === evaluationResult.head || v.label === evaluationResult.tail) {
        v = { ...v, data: { customColor: NodesColor.success } }
      } 
      // else {
      //   v = { ...v, data: { customColor: NodesColor.primary } }
      // }
      return v
    })
  }

  private error(evaluationResult: EvaluationResult) {
    this.openWarningDialog(evaluationResult)
  }

  private addEdges(triple: EvaluationResult): void {
    this.edges = [...this.edges, {
      id: triple.head + triple.relation + triple.tail,
      source: triple.head,
      target: triple.tail,
      label: triple.relation

    }]
  }

  private openSuccessDialog(evaluationResult: EvaluationResult): void {
    const dialogRef = this.dialog.open(SuccessDialog, {
      width: '500px',
      height: '250px',
      data: evaluationResult,
    });

    dialogRef.afterClosed().subscribe(_result => {
      console.log('The dialog was closed');
    });
  }


  private openWarningDialog(evaluationResult: EvaluationResult): void {
    const dialogRef = this.dialog.open(WarningDialog, {
      width: '800px',
      height: '600px',
      data: evaluationResult,
    });

    dialogRef.afterClosed().subscribe(_result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'success-dialog-component',
  templateUrl: 'success-dialog.component.html',
})
export class SuccessDialog {
  constructor(
    public dialogRef: MatDialogRef<SuccessDialog>,
    @Inject(MAT_DIALOG_DATA) public data: EvaluationResult,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'warning-dialog-component',
  templateUrl: 'warning-dialog.component.html',
})
export class WarningDialog {
  constructor(
    public dialogRef: MatDialogRef<WarningDialog>,
    @Inject(MAT_DIALOG_DATA) public data: EvaluationResult,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}