export type PlantStatus =
  | "seed"
  | "germinating"
  | "growing"
  | "developed"
  | "producing"
  | "lost";

export interface Plant {
  id: string;
  name: string;
  plantedAt: string;
  status: PlantStatus;
  notes: string;
}