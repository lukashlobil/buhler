import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MachineState } from '../../../models/machine';
import { MachineStore } from '../../../stores/machine.store';

@Component({
  selector: 'buh-machine-control',
  imports: [FormsModule],
  templateUrl: './machine-control.html',
  styleUrl: './machine-control.css',
})
export class MachineControl {
  readonly machineStore = inject(MachineStore);
  readonly states: MachineState[] = ['running', 'warning', 'alarm'];

  selectedMachineId = '';
  selectedState: MachineState = 'running';

  apply() {
    if (this.selectedMachineId) {
      this.machineStore.updateState(this.selectedMachineId, this.selectedState);
    }
  }
}
