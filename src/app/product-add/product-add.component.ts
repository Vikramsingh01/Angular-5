import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(private dataService: ProductService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.productAddForm = new FormGroup({
      name: new FormControl(''),
      color: new FormControl(''),
      price: new FormControl('')
    })
  }
  addProduct(){ 
    this.dataService.addItem(this.productAddForm.value).subscribe(res=>{
      this.router.navigate(['../'],{relativeTo: this.route})
    })
  }
  cancelAdd(){   
      this.router.navigate(['../'],{relativeTo: this.route}) 
  }
}
