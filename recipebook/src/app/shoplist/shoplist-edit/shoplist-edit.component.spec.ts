import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoplistEditComponent } from './shoplist-edit.component';

describe('ShoplistEditComponent', () => {
  let component: ShoplistEditComponent;
  let fixture: ComponentFixture<ShoplistEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoplistEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoplistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
