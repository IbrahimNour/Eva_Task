import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceRoomsListComponent } from './voice-rooms-list.component';

describe('VoiceRoomsListComponent', () => {
  let component: VoiceRoomsListComponent;
  let fixture: ComponentFixture<VoiceRoomsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceRoomsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceRoomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
