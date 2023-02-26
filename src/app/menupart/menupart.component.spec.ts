import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupartComponent } from './menupart.component';

describe('MenupartComponent', () => {
  let component: MenupartComponent;
  let fixture: ComponentFixture<MenupartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenupartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenupartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
