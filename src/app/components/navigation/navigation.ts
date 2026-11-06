import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MachineService } from '../../services/machine.service';
import { StateIndicator } from '../shared/state-indicator/state-indicator';

@Component({
  selector: 'buh-navigation',
  imports: [RouterLink, RouterLinkActive, StateIndicator],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  readonly machineService = inject(MachineService);
}
