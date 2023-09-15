export class StorageViewModel{
    id:number = 0;
    fullName: string = "";
    userPhoneNumber: string = "";
    postPhoneNumber: string = "";
    categoryName: string = "";
    title: string = "";
    info:string="";
    description: string = "";
    price: number = 0;
    capacity: number = 0;
    capacityMeasure: string = "";
    type: string = "";
    region:string = "";
    district: string = "";
    address: string = "";
    status: number = 0;
    createdAt: Date=new Date();
    updatedAt: Date=new Date();
    imagePath: string="";
}