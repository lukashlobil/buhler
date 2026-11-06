import { Component, inject, signal } from '@angular/core';
import { StateIndicator } from '../shared/state-indicator/state-indicator';
import { MachineStore } from '../../stores/machine.store';

@Component({
  selector: 'buh-navigation',
  imports: [StateIndicator],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  readonly machineStore = inject(MachineStore);
  readonly menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
