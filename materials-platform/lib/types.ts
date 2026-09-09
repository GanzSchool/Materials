export type CatalogMaterial={type:"material";id:string;title:string;slug:string;description?:string;contentPath:string;order:number;published:boolean};
export type CatalogCategory={type:"category";id:string;title:string;slug:string;order:number;children:CatalogNode[]};
export type CatalogNode=CatalogCategory|CatalogMaterial;
export type Catalog={version:number;title:string;nodes:CatalogNode[]};
export type TocItem={id:string;title:string;level:2|3};
