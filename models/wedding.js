'use strict';
module.exports = function (mongoose) {
  const { Schema } = mongoose;
  const WeddingSchema = new Schema({
    user_email: {
      type: String,
      required: [true, 'Must enter an email'],
      match: [/.+@.+\..+/, 'Please enter a valid email format: example@gmail.com']
    },
    title: { type: String, required: [true, 'Must enter a wedding title'] },
    description: { type: String, required: [true, 'Must enter a description'] },
    date: { type: Date, required: [true, 'Must enter a date'] },
    time: { type: String, required: [true, 'Must enter the time'] },
  }, {
    timestamps: true,
  });
  return mongoose.model('Wedding', WeddingSchema);
};
