
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


const projects = (req, res) => {

  const projectsList = [
    {
      "id" : "1",
      "name" : "Facebook Project"
    },

    {
      "id" : "2",
      "name" : "Gmail Application"
    }
  ]

  res.status(200).json({
    projects: projectsList
  })

}


const public_data = (req, res) => {

  res.status(200).json({
    message1:  'This is an example for public data',
    message2: 'To access this data, there is no need to undergo authentication process'
  });

}

module.exports = {customers, projects, public_data};