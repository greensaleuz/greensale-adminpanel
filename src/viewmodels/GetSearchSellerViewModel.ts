interface Posts{
    id:number ;
    fullName: string ;
    userPhoneNumber: string ;
    postPhoneNumber: string;
    categoryId: number ;
    title: string ;
    description: string ;
    price: number ;
    capacity: number;
    capacityMeasure: string ;
    type: string ;
    region:string ;
    district: string ;
    address: string ;
    status: number ;
    averageStars : number;
    userStars:number;
    createdAt: Date;
    updatedAt: Date;
    mainImage: string;
}
export class GetSearchSellerViewModel
{
    iteamCount:number=0 ;
    item2!: Posts[];
}