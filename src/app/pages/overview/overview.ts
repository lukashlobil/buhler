import { Component, inject } from '@angular/core';
import { MachineService } from '../../services/machine.service';
import { StateIndicator } from '../../components/shared/state-indicator/state-indicator';

@Component({
  selector: 'buh-overview',
  imports: [StateIndicator],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
  readonly machineService = inject(MachineService);
}
