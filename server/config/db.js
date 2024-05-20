import mongoose from "mongoose";

const connectToMongo = async () => {
    try {
        const res = await mongoose.connect(`mongodb+srv://sandhyamaharjan82:w_64C3JR%23%23tf%24u3@sandhyastore.ywzzzjn.mongodb.net/?retryWrites=true&w=majority&appName=sandhyastore`)
        if (res) {
            console.log("Connected successfully");
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectToMongo;
