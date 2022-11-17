const barChartData = require('../schema/barChart.json')

export const barchartController = {
  getAll: async (_, res) => {
    try {
      res.status(200).json(barChartData)
    } catch (err) {
      // res.status(500).json({ message: err.message })
    }
  },
}
