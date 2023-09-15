export class StorageViewModel{
     Id:number = 0;
     UserId:number = 0;
     FullName:string ="" 
     PhoneNumber:string ="";
     StorageName:string ="";
     Description:string="";
     Region:string="";
     District:string="";
     Address:string="";
     AddressLatitude:number=0;
     AddressLongitude:number=0;
     Info:string ="";
     AverageStars:number =0;
     UserStars:number =0;
     ImagePath:string ="";
     CreatedAt: Date = new Date();
     UpdatedAt: Date = new Date();
}