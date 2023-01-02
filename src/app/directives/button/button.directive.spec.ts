import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonDirective } from './button.directive';
import { buttonPrimarySelector } from './model';
import { ButtonDirectiveTestingModule } from './testing';

@Component({
  template: `<button button-no-outlined-primary>Default Button</button>`,
})
class TestHostComponent {}

describe('./src/app/directives/button', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: ButtonDirective;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ButtonDirectiveTestingModule],
      declarations: [TestHostComponent],
    });

    await TestBed.compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const directiveElement = fixture.debugElement.query(
      By.css(`[${buttonPrimarySelector}]`)
    );
    directive = directiveElement.injector.get<ButtonDirective>(ButtonDirective);
  });

  it('should be created', () => {
    expect(directive).toBeDefined();
    expect(directive).toBeInstanceOf(ButtonDirective);
  });
});
