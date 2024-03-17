import { Component, Input, inject, signal } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() id?: string;
  product = signal<Product | null>(null)
  cover = signal(''); // Es la imagen de la portada
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit(){
    if (this.id){
      this.productService.getOne(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0){ // En eeste if comprobamos si nuestro producto tiene mas de una imagen para mostrar
            this.cover.set(product.images[0])
          }
        }
      })
    }
  }

  changeCover(newImg: string){
    this.cover.set(newImg); //Cuando pulsemos en la imagenes de los detalles, es el que se pondrá el primero
  }

  addToCart(){
    const product = this.product();
    if( product){
      this.cartService.addToCart(product);

    }
  }

}
