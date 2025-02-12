import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalBoardComponent } from './principal-board.component';

describe('PrincipalBoardComponent', () => {
  let component: PrincipalBoardComponent;
  let fixture: ComponentFixture<PrincipalBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
