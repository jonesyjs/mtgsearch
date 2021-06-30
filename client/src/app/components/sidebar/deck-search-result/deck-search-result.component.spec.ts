import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckSearchResultComponent } from './deck-search-result.component';

describe('DeckSearchResultComponent', () => {
  let component: DeckSearchResultComponent;
  let fixture: ComponentFixture<DeckSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
