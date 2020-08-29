import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer';
  customer = [{ id: 1, name:'Lê Thạnh',  address : 'Huế', phone: '0905834288',img:'assets/images/chibi.jpg'}];
  model:any={};
  model2:any={};
  //Thêm
  addCustomer(){
    this.customer.push(this.model


    );
    this.model = {};


  }

  url = "";
  //upload ảnh
  selectFile(event){
    if(event.target.files)
    {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.url = event.target.result
      }
    }
  }
  //xóa
  delete(id:number){
   const index = this.customer.findIndex(customer => customer.id === id);
      this.customer.splice(index, 1);

  }
  myValue;
  editCustomer(k){
    this.model2.name = this.customer[k].name;
    this.model2.address = this.customer[k].address;
    this.model2.phone = this.customer[k].phone;
    this.myValue = k;
  }
  UpdateCustomer(){
    let k = this.myValue;
    for(let i=0; i<this.customer.length;i++ ){
      if(i==k){
        this.customer[i]= this.model2;
        this.model2 = {};
      }
    }
  }


}
