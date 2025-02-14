import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibraryComponent } from './test-library.component';

describe('TestLibraryComponent', () => {
  let component: TestLibraryComponent;
  let fixture: ComponentFixture<TestLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
