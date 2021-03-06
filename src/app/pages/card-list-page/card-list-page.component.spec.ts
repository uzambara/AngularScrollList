import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListPageComponent } from './card-list-page.component';

describe('CardListPageComponent', () => {
  let component: CardListPageComponent;
  let fixture: ComponentFixture<CardListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
