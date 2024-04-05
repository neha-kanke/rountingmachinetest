import { Iproduct } from "../model/products";

export let productsArray:Array<Iproduct> = [
    {
      pName: 'Samsung M31',
      pId: '1',
      pStatus: 'In Progress',
      canReturn : 1
      
    },
    {
      pName: 'Samsung TV LED',
      pId: '2',
      pStatus: 'Dispathched',
      canReturn : 1

    },
    {
      pName: 'Iphone 14',
      pId: '3',
      pStatus: 'In Progress',
      
      canReturn : 0,
     
    },
    {
      pName: 'Sony Headphone',
      pId: '4',
      pStatus: 'Delivered',
      canReturn : 0
    }
  ];