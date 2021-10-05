import Home from '../models/homeModel.js';
// @desc    Get all Homes
// @route   GET /api/homes
// @access  Public

const getHomes = async (req, res) => {
  const pageSize = 20;
  const pageNumber = Number(req.query.pageNumber) || 1;
  const homeAddress = req.query.homeAddress || '';

  const count = await Home.countDocuments();

  const query = {};

  if (homeAddress) {
    query.$text = { $search: homeAddress };
  }

  try {
    const homes = await Home.find(query)
      .limit(pageSize)
      .skip(pageSize * (pageNumber - 1));

    if (homes.length === 0) {
      res.status(404).json({
        status: 'Not Found',
        msg: 'Sorry no houses matching your request',
      });
    } else {
      res.status(200).json({
        status: 'success',
        results: homes.length,
        data: homes,
        pages: Math.ceil(count / pageSize),
      });
    }
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

export { getHomes };
