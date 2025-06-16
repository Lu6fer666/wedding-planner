'use strict';
module.exports = function (mongoose) {
  const { Schema } = mongoose;
  const GuestSchema = new Schema({
    name: { type: String, required: [true, 'Must enter guest name'] },
    email: {
      type: String,
      required: [true, 'Must enter guest email'],
      match: [/.+@.+\..+/, 'Please enter a valid email format: example@gmail.com']
    },
    phone: { type: String, required: [true, 'Must enter guest phone number'] },
    invitation: { type: Schema.Types.ObjectId, ref: 'Invitation' },
    wedding: { type: Schema.Types.ObjectId, ref: 'Wedding', required: true },
  });
  return mongoose.model('Guest', GuestSchema);
};
