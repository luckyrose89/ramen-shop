// dummy menu data to serve on test

exports.getMenu = (request, response) => {
  let menuItems = [
    {
      id: 1,
      category: "Starters",
      items: [
        {
          id: 1,
          name: "Chicken teriyaki",
          price: 7.5,
        },
        {
          id: 2,
          name: "Tempura Platter",
          price: 8,
        },
      ],
    },
    {
      id: 2,
      category: "Noodles",
      items: [
        {
          id: 1,
          name: "Tonkatsu Ramen",
          price: 12.5,
        },
      ],
    },
  ];

  return response.json(menuItems);
};
