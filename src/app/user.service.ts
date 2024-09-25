import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Dữ liệu giả lập
  private users: User[] = [
    {id: 1, name: 'Trần Văn Trung', email: 'trungabc@gmail.com', phone: '09833485349'},
    {id: 2, name: 'Nguyễn Anh Tú', email: 'tuabc@gmail.com', phone: '09833485349'},
    {id: 3, name: 'Phùng Quang Anh', email: 'anh@gmail.com', phone: '09833485349'},
  ];

  constructor() { }

  // Phương thức lấy danh sách người dùng
  getUsers(): Observable<User[]> {
    return of(this.users);
  }
}
