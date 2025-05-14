import { ProductCollection, ProductSize, ProductStatus } from "../enums/product.enum";

export interface Product{
    [x: string]: string | number | Date | string[] | undefined;
    _id: string;
    productStatus: ProductStatus;
    productCollection: ProductCollection;
    productName :string;
    productPrice: number;
    productLeftCount: number;
    productSize: ProductSize;
    ProductVolume: number;
    productDesc?: string;
    productImages: string[];
    productViews:number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductInquiry{
    order:string;
    page: number;
    limit:number;
    productCollection?: ProductCollection;
    search?: string;
}