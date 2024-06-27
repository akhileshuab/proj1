export class User{
  name!:string;
  email!:string;
  password!:string;
  phone!:string;
  // role!:string;
  // dob!:string;
  // agreetc!:boolean;
  // age!:number;
  // aboutYou!:string;
  // uploadPhoto!:string;
}
export class Address{
  id!:number;
  addLine1!:string;
  addLine2!:string;
  city!:string;
  state!:string
  zipCode!:number;
}
export class Product{
  id!:number;
  name!:string
  uploadPhoto!:string;
  productDesc!:string;
  mrp!:number;
  dp!:number;
  status!:boolean;
}
export class Order{
  id!:number;
  userId!:number;
  sellerId!:number;
  product!:Product;
  deliveryAddress!:Address;
  contact!:number;
  dateTime!:string;
}
