import { Injectable, signal } from '@angular/core';
import { Machine, MachineState } from '../models/machine';
import machinesData from '../data/machines.json';

@Injectable({
  providedIn: 'root',
})
export class MachineService {
  private _machines = signal<Machine[]>(machinesData as Machine[]);
  readonly machines = this._machines.asReadonly();

  updateState(id: string, state: MachineState) {
    this._machines.update((machines) =>
      machines.map((m) => (m.id === id ? { ...m, state } : m)),
    );
  }
}
