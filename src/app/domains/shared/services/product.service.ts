import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private htpp = inject(HttpClient); // permite conectarnos a un apirest y hacer servicios

  constructor() { }

  getProducts(category_id?: string){
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    if(category_id){
      url.searchParams.set('categoryId', category_id);
    }
    return this.htpp.get<Product[]>(url.toString())
  }

  getOne(id: string){
    return this.htpp.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
}
