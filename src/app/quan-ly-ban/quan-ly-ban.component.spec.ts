import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyBanComponent } from './quan-ly-ban.component';

describe('QuanLyBanComponent', () => {
  let component: QuanLyBanComponent;
  let fixture: ComponentFixture<QuanLyBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuanLyBanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuanLyBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
