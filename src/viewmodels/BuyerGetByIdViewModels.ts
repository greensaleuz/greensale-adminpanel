// PostViewModel.ts

interface Image {
    buyerPostId: number;
    imagePath: string;
    createdAt: Date;
    updatedAt: Date ;
    id: number;
  }
  
 interface postViewModel {
    id: number ;
    fullName: string;
    userId: number;
    userPhoneNumber: string;
    postPhoneNumber: string;
    categoryId: number;
    title: string;
    description: string;
    price: number;
    capacity: number;
    capacityMeasure: string;
    type: string;
    region: string;
    district: string;
    address:string;
    updatedAt: Date ;
    createdAt: Date ;
    status: number;
    userStars:number;
    averageStars : number;
    buyerpostImages: Image[];
    mainImage: string;
  }
  
  export type {postViewModel}
  