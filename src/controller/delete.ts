import { VehicleStore } from '../store/vehicle';
import { Request, Response } from 'express';

interface Parameters {
  id: string;
}

export class DeleteVehicleController {
  constructor(private readonly vehicleStore: VehicleStore) {}

  public async handle(req: Request<Parameters>, res: Response): Promise<void> {
    const id = req.params.id 
    const idnum = parseInt(id)
    await this.vehicleStore.deleteVehicle({id:idnum})
    res.status(204).send();
  }
}
