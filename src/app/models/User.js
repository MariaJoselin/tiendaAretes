// models/user.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    password: String,
    fechaRegistro: { type: Date, default: Date.now },
    // otros campos...
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
