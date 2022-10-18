const express = require("express");

const barChartRoute = express.Router();

const barChartData = require("../../schema/barChart.json");

barChartRoute.get("/", async (req, res) => {
  try {
    res.status(200).json(barChartData);
    res.json(colours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
export default barChartRoute;
