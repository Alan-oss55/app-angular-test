import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Welcome } from '../../models/products.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-ditail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-ditail.component.html',
  styleUrl: './product-ditail.component.css'
})
export class ProductDitailComponent implements OnInit {

  loading: Boolean = true;
  public product?: Welcome;

  private service = inject(ApiService)
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id']; // Convert id to number
      this.service.getProductById(productId).subscribe((data: Welcome) => {
        this.product = data;
        console.log(data);
        this.loading = false;
      });
    });
  }
 
}
