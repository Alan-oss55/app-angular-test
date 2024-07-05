import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Welcome } from '../../models/products.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  
  productList: Welcome[] = [];
  private api_service = inject(ApiService);
  private _router = inject(Router)



  ngOnInit(): void {
      this.getAllProducts();
  }

  getAllProducts(){
    this.api_service.getAllProducts()
    .subscribe({
      next: (data) =>{
        this.productList = data;
        console.log(this.productList)
      },
      error: (error) =>{
        console.error(error);
      }
    })
  }
  
  navigate(id: number){
    this._router.navigate(['products/', id])
  }

}
