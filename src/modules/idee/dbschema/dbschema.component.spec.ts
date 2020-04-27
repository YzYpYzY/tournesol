import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbschemaComponent } from './dbschema.component';

describe('DbschemaComponent', () => {
  let component: DbschemaComponent;
  let fixture: ComponentFixture<DbschemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbschemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbschemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
