import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Node } from '@swimlane/ngx-graph';
import { Links } from 'src/app/model/links.model';
import { Triple } from 'src/app/model/triple.model';

@Component({
  selector: 'app-cm-helper-form',
  templateUrl: './cm-helper-form.component.html',
  styleUrls: ['./cm-helper-form.component.scss']
})
export class CmHelperFormComponent implements OnInit {

  constructor() { }

  @Output() doEvaluateClicked = new EventEmitter<Triple>();

  @Output() inputChanges = new EventEmitter<Triple>();

  @Input() 
  links: Links= {}
  evaluateDisabled = true;

  @Input()
  nodes: Node[] = []

  inputForm = new FormGroup({
    firstConcept: new FormControl(''),
    relation: new FormControl(''),
    secondConcept: new FormControl(''),
  });

  ngOnInit(): void {
   this.inputForm.valueChanges.subscribe(v=> this.inputChanges.emit({
    head: v.firstConcept || '',
    tail: v.secondConcept || '',
    relation : v.relation || ''
   }))
   
   
  }

  disableEvaluate() {
    return this.inputForm.get('firstConcept')?.value==='' 
    || this.inputForm.get('relation')?.value==='' 
    || this.inputForm.get('secondConcept')?.value==='' 
  }

  doEvaluate() {
    const triple: Triple = {
      head: this.inputForm.get('firstConcept')?.value as string,
      relation: this.inputForm.get("relation")?.value as string,
      tail: this.inputForm.get('secondConcept')?.value as string
    }

    this.doEvaluateClicked.emit(triple)
  }
}
