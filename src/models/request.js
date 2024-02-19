import mongoose, { SchemaType } from "mongoose"

const Schema = mongoose.Schema;

const requestSchema = new Schema({
    client_user_id: Number,
    dealer_user_id: Number,
    request_status: Boolean,
    waste_description: String,
    waste_qty : Number,
    waste_tags: [String],
    address: String,
    pickup_date: Date,
    waste_image: {
        data: Buffer,
        contentType: String
    }
    
}, { timestamps: true })

const requestModel = mongoose.model("request", requestSchema);

export { requestModel };