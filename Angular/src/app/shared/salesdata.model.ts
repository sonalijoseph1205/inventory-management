export class SalesData{
   public _id : string;
   public date: Date;
   public sale: Number;
   public purchase: Number;
   public credit: Number;


   constructor(_id:string, date: Date,sale: Number,purchase: Number,credit: Number)
   {
       this._id= _id;
       this.date= date;
       this.sale=sale;
       this.purchase=purchase;
       this.credit=credit;
   }
}

