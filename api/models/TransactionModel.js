/*
* Author : Sunny Chauhan
* Module : BrandModel
* Description : Use for adding Brand
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

let modelSchema = new Schema({
     token : {type : String},
     timeStamp : {type : String},
     transactionId : {type : String},
     paymentStatus : {
                         type : String,
                         enum : ['NOTSTARTED', 'INITIATED', 'PENDING', 'COMPLETED'],
                         default : 'NOTSTARTED'
                    },
     invoice : {type : String},
     transObj : {},
     amount : {type : Number},
     paypalFee : {type : Number},
     paymentType : {type : String},
     payerID : {type : String},
     userId : { type: ObjectId, ref : 'User'},
     vehicleId : { type: ObjectId, ref : 'Vehicle'},
     status: {
          type: Boolean,
          enum : [true, false],
          default:true
     },
     isDeleted: {
          type: Boolean,
          enum : [true, false],
          default: false
     },
     createdDate:{type:Date, default: Date.now},
     modifiedDate:{type:Date, default: Date.now},
});

modelSchema.set('toObject', { virtuals: true });
modelSchema.set('toJSON', { virtuals: true });

let modelObj = mongoose.model('Transaction', modelSchema);
module.exports = modelObj;
