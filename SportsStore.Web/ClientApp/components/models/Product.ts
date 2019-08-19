
export class Product {

	public id: number = 0;
	public description: string = "";
	public category: string = "";
	public price: number = 0;
	public name:string="";
}

export interface IProduct {
	id: number;
	description: string;
	category: string;
	price: number;
	name: string;
}