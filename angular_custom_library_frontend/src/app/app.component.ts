import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcnButtonComponent } from '../lib/ui/button/button.component';
import { OcnCardComponent } from '../lib/ui/card/card.component';
import { OcnBadgeComponent } from '../lib/ui/badge/badge.component';
import { OcnInputComponent } from '../lib/ui/input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, OcnButtonComponent, OcnCardComponent, OcnBadgeComponent, OcnInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ocean Professional UI Library';
  // State to simulate controls
  btnVariant: 'primary' | 'secondary' | 'ghost' = 'primary';
  btnSize: 'sm' | 'md' | 'lg' = 'md';
  btnLoading = false;

  inputValue = 'Try typing...';
  cardTitle = 'Card Title';
  cardSubtitle = 'Supporting subtitle';

  setVariant(v: 'primary' | 'secondary' | 'ghost') { this.btnVariant = v; }
  setSize(s: 'sm' | 'md' | 'lg') { this.btnSize = s; }

  // PUBLIC_INTERFACE
  simulateAsync() {
    /** Simulates an async operation to demonstrate loading state. */
    this.btnLoading = true;
    globalThis.setTimeout(() => {
      this.btnLoading = false;
    }, 1000);
  }
}
