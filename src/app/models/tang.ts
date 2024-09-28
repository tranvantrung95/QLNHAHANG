import { KhuVuc } from '../models/khu-vuc'; // Import interface Khu vực

export interface Tang {
  maTang: number;
  tenTang: string;
  dsKhuVuc: KhuVuc[]; // Danh sách các khu vực trong tầng
}
