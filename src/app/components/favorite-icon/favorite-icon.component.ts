import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.scss']
})
export class FavoriteIconComponent implements OnInit {
  @Input() isFavorite: boolean;
  @Output() favoriteChanged = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onImageClick(): void {
    this.favoriteChanged.emit();
  }
}
