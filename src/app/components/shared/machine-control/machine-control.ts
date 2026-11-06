import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MachineService } from '../../../services/machine.service';
import { MachineState } from '../../../models/machine';

@Component({
  selector: 'buh-machine-control',
  imports: [FormsModule],
  templateUrl: './machine-control.html',
  styleUrl: './machine-control.css',
})
export class MachineControl {
  readonly #machineService = inject(MachineService);

  readonly machines = this.#machineService.machines;
  readonly states: MachineState[] = ['running', 'warning', 'alarm'];

  selectedMachineId = '';
  selectedState: MachineState = 'running';

  apply() {
    if (this.selectedMachineId) {
      this.#machineService.updateState(this.selectedMachineId, this.selectedState);
    }
  }
}
