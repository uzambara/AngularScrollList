import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-edit-icon',
  templateUrl: './edit-icon.component.html',
  styleUrls: ['./edit-icon.component.scss']
})
export class EditIconComponent implements OnInit {
  @Output() editCLick: EventEmitter<void>;

  constructor() { }

  ngOnInit(): void {
  }
}
