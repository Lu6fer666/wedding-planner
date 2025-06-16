'use strict';
module.exports = function (mongoose) {
  const { Schema } = mongoose;
  const VenueSchema = new Schema({
    name: { type: String, required: [true, 'Must enter a venue name'] },
    photo: { type: String, required: [true, 'Must enter photo URL'] },
    address: { type: String, required: [true, 'Must enter full address'] },
    website: {
      type: String,
      required: [true, "Must enter link to venue's website"],
      match: [/^https?:\/\/.+/, 'Must enter a valid URL']
    },
    wedding: { type: Schema.Types.ObjectId, ref: 'Wedding', required: true },
  });
  return mongoose.model('Venue', VenueSchema);
};
