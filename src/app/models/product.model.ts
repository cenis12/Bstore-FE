export interface ProductModelServer {
  id: number;
  name: string;
  category: string;
  price:number;
  picture: Blob;
  size:string;
  quantity: number;
  src: any;
}

export interface serverResponse  {
  count: number;
  products: ProductModelServer[];
};
