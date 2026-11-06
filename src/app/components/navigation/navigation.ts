import { Component, inject, signal } from '@angular/core';
import { MachineService } from '../../services/machine.service';
import { StateIndicator } from '../shared/state-indicator/state-indicator';

@Component({
  selector: 'buh-navigation',
  imports: [StateIndicator],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  readonly machineService = inject(MachineService);
  readonly menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
