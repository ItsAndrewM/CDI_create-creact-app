export const sailQuoteData = [
  {
    label: "Boat Model",
    type: "text",
    field: "input",
    name: "boatModel",
    placeholder: "Type in your Boat Model (if known)",
  },
  {
    label: "Type of Sailing",
    field: "select",
    name: "sailingType",
    options: [
      {
        name: "Cruising - Lake and Coastal",
        value: "Cruising - Lake and Coastal",
      },
      {
        name: "Cruising - Long Distance and Circumnavigation",
        value: "Cruising - Long Distance and Circumnavigation",
      },
      {
        name: "Racing - Club and Long Distance Racing",
        value: "Racing - Club and Long Distance Racing",
      },
    ],
  },
  {
    label: "Timeframe",
    field: "select",
    name: "timeframe",
    options: [
      {
        name: "I'm interested in pricing",
        value: "I'm interested in pricing",
      },
      {
        name: "I’m budgeting for a new boat",
        value: "I’m budgeting for a new boat",
      },
      {
        name: "I will need sails next season",
        value: "I will need sails next season",
      },
      {
        name: "I will need sails this season",
        value: "I will need sails this season",
      },
      {
        name: "I need new sails now",
        value: "I need new sails now",
      },
    ],
  },
];
