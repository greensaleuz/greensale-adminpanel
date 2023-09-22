export class StorageViewModel{
     id:number = 0;
     userId:number = 0;
     fullName:string ="" 
     price:Number=0;
     averageStars:Number=0;
     phoneNumber:string ="";
     storageName:string ="";
     description:string="";
     region:string="";
     district:string="";
     address:string="";
     addressLatitude:number=0;
     addressLongitude:number=0;
     info:string ="";
     userStars:number =0;
     imagePath:string ="";
     createdAt: Date = new Date();
     updatedAt: Date = new Date();
}