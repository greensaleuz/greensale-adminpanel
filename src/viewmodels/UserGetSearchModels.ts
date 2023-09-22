interface Users{
    id: number ;
    firstName: string ;
    lastName: string ;
    phoneNumber: string 
    phoneNuberConfirme: boolean ;
    region: string ;
    district: string ;
    address: string ;
    createdAt: Date ;
    updatedAt: Date ;
}
export class UserGetSearchViewModels
{
    iteamCount:number=0 ;
    item2!: Users[];
}