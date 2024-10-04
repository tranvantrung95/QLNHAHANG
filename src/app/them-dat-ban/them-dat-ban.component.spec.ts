import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemDatBanComponent } from './them-dat-ban.component';

describe('ThemDatBanComponent', () => {
  let component: ThemDatBanComponent;
  let fixture: ComponentFixture<ThemDatBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemDatBanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemDatBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
