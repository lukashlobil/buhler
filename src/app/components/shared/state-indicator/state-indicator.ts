import { Component, input } from '@angular/core';
import { MachineState } from '../../../models/machine';

const stateConfig: Record<MachineState, { icon: string; color: string; label: string }> = {
  running: { icon: 'schedule', color: '#4caf50', label: 'Running' },
  alarm: { icon: 'error', color: '#f44336', label: 'Alarm' },
  warning: { icon: 'warning', color: '#ff9800', label: 'Warning' },
};

@Component({
  selector: 'buh-state-indicator',
  imports: [],
  templateUrl: './state-indicator.html',
  styleUrl: './state-indicator.css',
})
export class StateIndicator {
  readonly state = input.required<MachineState>();
  protected stateConfig = stateConfig;
}
