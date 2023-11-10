import { ContainerArea } from "./ContainerLocation";

export type ShipContainer = {
    name: string;
    weight: number;
    row: number,
    col: number,
    location: ContainerArea;
}