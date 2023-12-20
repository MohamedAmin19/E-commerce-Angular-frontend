import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemebersPageComponent } from './memebers-page.component';

describe('MemebersPageComponent', () => {
  let component: MemebersPageComponent;
  let fixture: ComponentFixture<MemebersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemebersPageComponent]
    });
    fixture = TestBed.createComponent(MemebersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
