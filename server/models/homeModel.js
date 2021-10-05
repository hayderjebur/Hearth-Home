import mongoose from 'mongoose';

const homeSchema = mongoose.Schema({
  propertyType: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  postalCode: { type: String },
  price: { type: Number },
  beds: { type: Number },
  baths: { type: Number },
  squareFeet: { type: Number },
  img: { type: String },
});
homeSchema.index({
  address: 'text',
  city: 'text',
  state: 'text',
  postalCode: 'text',
});

const Home = mongoose.model('Home', homeSchema);

export default Home;
