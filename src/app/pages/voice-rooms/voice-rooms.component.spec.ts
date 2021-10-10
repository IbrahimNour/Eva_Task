import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceRoomsComponent } from './voice-rooms.component';

describe('VoiceRoomsComponent', () => {
  let component: VoiceRoomsComponent;
  let fixture: ComponentFixture<VoiceRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
