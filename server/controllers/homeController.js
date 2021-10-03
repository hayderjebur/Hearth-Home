import Home from '../models/homeModel.js';
// @desc    Get all Homes
// @route   GET /api/homes
// @access  Public

const getHomes = async (req, res) => {
  const pageSize = 20;
  const page = Number(req.query.pageNumber) || 1;
  const homeAddress = req.query.homeAddress || '';

  const count = await Home.countDocuments();

  const query = {};
  if (homeAddress) {
    query.$text = { $search: homeAddress };
  }

  const homes = await Home.find(query)
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.status(200).json({
    status: 'success',
    results: homes.length,
    data: homes,
    pages: Math.ceil(count / pageSize),
  });
};

export { getHomes };
