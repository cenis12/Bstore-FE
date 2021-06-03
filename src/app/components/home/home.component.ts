import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModelServer, serverResponse} from "../../models/product.model";
import {Router} from "@angular/router";

//import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  products: ProductModelServer[] = [];




  constructor(private productService: ProductService,

              private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts(10).subscribe((prods: serverResponse ) => {
      this.products = prods.products;
      /*let i;
      for(i = 0; i < this.products.length; i++){
        this.createImageFromBlob(this.products[i].picture, i)
      }*/

      console.log(this.products);
    });
    }

    selectProduct(id: Number){
    this.router.navigate( ['/product', id] ).then();
    }

    /*createImageFromBlob(image: Blob, id: number) {
      let reader = new FileReader();
      reader.addEventListener("load",
        () => {
            this.products[id].src = reader.result;
        },
        false);

      if (image) {
        if (image.type !== "application/pdf")
          reader.readAsDataURL(image);
      }
    }*/


  /*AddToCart(id: number) {
    this.cartService.AddProductToCart(id);
  }*/
}





