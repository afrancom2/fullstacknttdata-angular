import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  standalone: true,
  selector: '[appThousandSeparator]'
})
export class ThousandDirective {

  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    const numericValue = value.replace(/,/g, '');
    const formattedValue = this.formatNumber(numericValue);
    this.ngControl.control?.setValue(formattedValue, { emitEvent: false });
  }

  private formatNumber(value: string): string {
    if (!value) return '';
    return parseFloat(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
