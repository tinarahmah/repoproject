import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamuDetailComponent } from './tamu-detail.component';

describe('TamuDetailComponent', () => {
  let component: TamuDetailComponent;
  let fixture: ComponentFixture<TamuDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamuDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TamuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
