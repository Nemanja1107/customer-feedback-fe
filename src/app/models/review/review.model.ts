export interface Review {
    userId?: string;
    storeId?: string;
    comment: string;
    rating: number;
    createdAt?: Date;
    updatedAt?: Date;
    //username od usera koji je napisao review, dodatno opciono polje da bih ga ispisao u html
    username?: string;
    //3 dodatna polja koja ispisujem u html da bih prikazao top rated store
    name?: string,
    description?: string,
    logo?: string
}
