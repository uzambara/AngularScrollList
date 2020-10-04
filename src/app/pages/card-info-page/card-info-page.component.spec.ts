import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoPageComponent } from './card-info-page.component';

describe('CardInfoPageComponent', () => {
  let component: CardInfoPageComponent;
  let fixture: ComponentFixture<CardInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
