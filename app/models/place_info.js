var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var InfoSchema = new Schema({
  locationName:  {
    type: String
  },
  description:  {
    type: String
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  }
});
mongoose.model('Info', InfoSchema);