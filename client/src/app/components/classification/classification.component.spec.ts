import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationComponent } from './classification.component';

describe('ClassicationComponent', () => {
  let component: ClassificationComponent;
  let fixture: ComponentFixture<ClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
