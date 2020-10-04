import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../../../models/card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  @Input() card: Card;
  @Input() isEditMode = false;

  @Output() saveButtonCLick = new EventEmitter<Card>();
  @Output() deleteButtonCLick = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  public onTitleChange($event: EventTarget): void {
    this.card = {
      ...this.card,
      title: ($event as HTMLInputElement).value
    };
  }

  public onDescriptionChange($event: EventTarget): void {
    this.card = {
      ...this.card,
      description: ($event as HTMLTextAreaElement).value
    };
  }

  public onSaveButtonClick(): void {
    this.saveButtonCLick.emit(this.card);
  }

  public onDeleteButtonClick(): void {
    this.deleteButtonCLick.emit(this.card);
  }
}
