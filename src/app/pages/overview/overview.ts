import { Component, inject } from '@angular/core';
import { MachineService } from '../../services/machine.service';
import { StateIndicator } from '../../components/shared/state-indicator/state-indicator';
import { MachineControl } from '../../components/shared/machine-control/machine-control';

@Component({
  selector: 'buh-overview',
  imports: [StateIndicator, MachineControl],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
  readonly machineService = inject(MachineService);
}
