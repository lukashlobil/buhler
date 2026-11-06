import { Component, inject } from '@angular/core';
import { StateIndicator } from '../../components/shared/state-indicator/state-indicator';
import { MachineControl } from '../../components/shared/machine-control/machine-control';
import { MachineStore } from '../../stores/machine.store';

@Component({
  selector: 'buh-overview',
  imports: [StateIndicator, MachineControl],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
  readonly machineStore = inject(MachineStore);
}
