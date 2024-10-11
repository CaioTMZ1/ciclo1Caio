import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoEtapaComponent } from './arquivo-etapa.component';

describe('ArquivoEtapaComponent', () => {
  let component: ArquivoEtapaComponent;
  let fixture: ComponentFixture<ArquivoEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArquivoEtapaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquivoEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
