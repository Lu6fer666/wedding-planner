'use strict';
module.exports = function (mongoose) {
  const { Schema } = mongoose;
  const InvitationSchema = new Schema({
    status: { type: String, required: [true, 'Must enter invitation status'] },
    guest: { type: Schema.Types.ObjectId, ref: 'Guest', required: true },
  });
  return mongoose.model('Invitation', InvitationSchema);
};
