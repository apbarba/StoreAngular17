import { Component, Input, Output, EventEmitter } from '@angular/core';
import {} from './../../components/product/product.component'
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../../../shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  //@Input = Identifica los componentes que va a tener la clase PADRE que en este caso va a ser la clase LIST, por lo que lista va a tener
  //las siguientes variables en la que declaramos con input para que la clase hija(product) pueda utilizarla

  //{required: true} significa que esos elementos son obligatorios en la clase padre

  @Input({required: true}) product! : Product;  

  @Output() addToCart = new EventEmitter(); //Permite comunicar cosas del hijo al Padre

  addToCartHandler(){  //Tendra que llegar este evento al padre
    console.log('click form child');
    this.addToCart.emit(this.product);
  }
    
}
