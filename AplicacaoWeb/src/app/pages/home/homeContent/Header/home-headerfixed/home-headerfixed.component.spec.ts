import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderfixedComponent } from './home-headerfixed.component';

describe('HomeHeaderfixedComponent', () => {
  let component: HomeHeaderfixedComponent;
  let fixture: ComponentFixture<HomeHeaderfixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHeaderfixedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeHeaderfixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
