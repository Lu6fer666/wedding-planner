'use strict';
module.exports = function (mongoose) {
  const { Schema } = mongoose;
  const MediaSchema = new Schema({
    mediaType: { type: String, required: [true, 'Must enter the media type'] },
    url: {
      type: String,
      required: [true, 'Must enter media URL'],
      match: [/^https?:\/\/.+/, 'Must enter a valid URL']
    },
    wedding: { type: Schema.Types.ObjectId, ref: 'Wedding', required: true },
  });
  return mongoose.model('Media', MediaSchema);
};
