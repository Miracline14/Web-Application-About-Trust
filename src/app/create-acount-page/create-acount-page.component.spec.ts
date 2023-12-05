import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcountPageComponent } from './create-acount-page.component';

describe('CreateAcountPageComponent', () => {
  let component: CreateAcountPageComponent;
  let fixture: ComponentFixture<CreateAcountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAcountPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAcountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
