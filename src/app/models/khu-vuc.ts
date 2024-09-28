import { Ban } from '../models/ban'; // Import interface Bàn

export interface KhuVuc {
  maKhuVuc: number;
  tenKhuVuc: string;
  dsBan: Ban[]; // Danh sách các bàn trong khu vực
}
