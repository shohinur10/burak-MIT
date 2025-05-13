/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { serverApi } from "../lib/config";
import { Product, ProductInquiry } from "../lib/types/product";

class ProductService{
    private readonly path: string;

    constructor(){
        this.path = serverApi;  // Ensure this is "http://localhost:3003"

}

public async getProducts(input: ProductInquiry): Promise<Product[]> {
    try {
      let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;
      if (input.productCollection) url += `&productCollection=${input.productCollection}`;
      if (input.search) url += `&search=${input.search}`;
  
      console.log("Requesting URL:", url); // 👈 Debug this!
      
      const result = await axios.get(url);
      console.log("getProducts result:", result);
      return result.data;
    } catch (err) {
      console.error("Error, getProducts:", err); // 👈 This is line 26
      throw err;
    }
  }
}  
export default ProductService;