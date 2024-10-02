export interface MonAn {
  tenMon: string;
  donGia: number;
  daChon: boolean;
  soLuong?: number; // Số lượng món ăn (optional khi món chưa được chọn)
  imageUrl: string;
  trangThaiMon: string;
}
export interface Order {
  tenMon: string;
  soLuong: number;
  donGia: number;
  trangThai: string; // Trạng thái của món: 'Chưa lên', 'Đã lên'
  imageUrl: string;  // Hình ảnh món
}
