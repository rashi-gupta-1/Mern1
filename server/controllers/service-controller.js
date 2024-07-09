// Assuming you have required Mongoose and defined the Service model correctly

const Service = require("../model/service-model");

const services = async (req, res) => {
  try {
    const response = await Service.find();

    if (!response || response.length === 0) {
      return res.status(404).json({ msg: "No service found" });
    }

    res.status(200).json(response); // Assuming `response` is an array of service objects
  } catch (error) {
    console.error(`services error: ${error}`);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = services; // Exporting the function 'services', not the Service model
