import mongoose from 'mongoose';
import validator from 'validator';
import { mongoosePagination, Pagination } from "mongoose-paginate-ts";
interface Isnipet {
    name: string;
    description: string;
    email: mongoose.Schema.Types.ObjectId
}

const snipetSchema = new mongoose.Schema<Isnipet>({
    name: {
        type: String,
        required: [true, 'Please enter name'],
    },
    description: {
        type: String,
    },
    email: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

}, { timestamps: true })
snipetSchema.plugin(mongoosePagination);
const Snipet: Pagination<Isnipet> = mongoose.model<Isnipet, Pagination<Isnipet>>("User", snipetSchema);
export default Snipet;