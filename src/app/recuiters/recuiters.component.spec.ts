import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuitersComponent } from './recuiters.component';

describe('RecuitersComponent', () => {
  let component: RecuitersComponent;
  let fixture: ComponentFixture<RecuitersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuitersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
