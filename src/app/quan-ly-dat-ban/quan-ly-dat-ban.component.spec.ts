import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyDatBanComponent } from './quan-ly-dat-ban.component';

describe('QuanLyDatBanComponent', () => {
  let component: QuanLyDatBanComponent;
  let fixture: ComponentFixture<QuanLyDatBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuanLyDatBanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuanLyDatBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
