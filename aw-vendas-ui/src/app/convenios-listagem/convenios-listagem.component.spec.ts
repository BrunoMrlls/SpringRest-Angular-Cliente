import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveniosListagemComponent } from './convenios-listagem.component';

describe('ConveniosListagemComponent', () => {
  let component: ConveniosListagemComponent;
  let fixture: ComponentFixture<ConveniosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConveniosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveniosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
