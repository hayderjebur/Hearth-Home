import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Home from './server/models/homeModel.js';
import connectDB from './server/config/db.js';
import fs from 'fs';
import csv from 'csv-parser';

dotenv.config();

connectDB();

const importData = async () => {
  await Home.deleteMany();
  fs.createReadStream('./data.csv')
    .pipe(csv())
    .on('data', function (data) {
      try {
        Home.create({
          propertyType: data['PROPERTY TYPE'],
          address: data.ADDRESS,
          city: data.CITY,
          state: data['STATE OR PROVINCE'],
          postalCode: data['ZIP OR POSTAL CODE'],
          price: data.PRICE,
          beds: data.BEDS,
          baths: data.BATHS,
          squareFeet: data['SQUARE FEET'],
        });
      } catch (err) {
        console.error(`${error}`);
        process.exit(1);
      }
    })
    .on('end', function () {
      console.log('Data Imported!');
    });
};

const destroyData = async () => {
  try {
    await Home.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
