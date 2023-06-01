import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCRUDComponent } from './user-crud.component';

describe('UserCRUDComponent', () => {
  let component: UserCRUDComponent;
  let fixture: ComponentFixture<UserCRUDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCRUDComponent]
    });
    fixture = TestBed.createComponent(UserCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
