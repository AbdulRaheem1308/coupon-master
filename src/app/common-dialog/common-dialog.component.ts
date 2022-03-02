import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.css']
})
export class CommonDialogComponent implements OnInit {

  @Input() heading!: string;
  @Input() data!: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
