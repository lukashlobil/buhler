import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Machine, MachineState } from '../models/machine';
import machinesData from '../data/machines.json';

interface MachineStateShape {
  machines: Machine[];
}

export const MachineStore = signalStore(
  withState<MachineStateShape>({ machines: machinesData as Machine[] }),
  withMethods((store) => ({
    updateState(id: string, state: MachineState) {
      patchState(store, (s) => ({
        ...s,
        machines: s.machines.map((m) => (m.id === id ? { ...m, state } : m)),
      }));
    },
  })),
);
