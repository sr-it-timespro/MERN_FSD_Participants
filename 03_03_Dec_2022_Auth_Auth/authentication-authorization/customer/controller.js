
const customers = (req, res) => {

  const customerList = [
    {
      "id" : "1",
      "name" : "Google"
    },

    {
      "id" : "2",
      "name" : "Airtel"
    },

    {
      "id" : "3",
      "name" : "Dell India"
    },

    {
      "id" : "4",
      "name" : "Max New York Life Insurance"
    },

    {
      "id" : "5",
      "name" : "Johnson & Johnson"
    },    
  ]

  res.status(200).json({
    customers: customerList
  })

}

module.exports = {customers};