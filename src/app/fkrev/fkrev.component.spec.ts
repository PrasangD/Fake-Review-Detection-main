import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FkrevComponent } from './fkrev.component';

describe('FkrevComponent', () => {
  let component: FkrevComponent;
  let fixture: ComponentFixture<FkrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FkrevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FkrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
