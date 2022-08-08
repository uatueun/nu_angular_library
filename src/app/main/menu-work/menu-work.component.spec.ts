import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWorkComponent } from './menu-work.component';

describe('MenuWorkComponent', () => {
  let component: MenuWorkComponent;
  let fixture: ComponentFixture<MenuWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
