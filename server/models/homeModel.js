import mongoose from 'mongoose';

const homeSchema = mongoose.Schema({
  propertyType: { type: String },
  address: { type: String, text: true },
  city: { type: String },
  state: { type: String },
  postalCode: { type: String },
  price: { type: Number },
  beds: { type: Number },
  baths: { type: Number },
  squareFeet: { type: Number },
  img: { type: String },
});

const Home = mongoose.model('Home', homeSchema);

export default Home;
