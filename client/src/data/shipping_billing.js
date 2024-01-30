export const shipping_billing = [
  {
    label: "First name",
    type: "text",
    required: true,
    field: "input",
    name: "first_name",
    placeholder: "First name",
  },
  {
    label: "Last name",
    type: "text",
    required: true,
    field: "input",
    name: "last_name",
    placeholder: "Last name",
  },
  {
    label: "Company name",
    type: "text",
    field: "input",
    name: "companyName",
    placeholder: "Company name",
    required: false,
  },
  {
    label: "Street Address",
    required: true,
    field: "input",
    type: "text",
    name: "address_1",
    placeholder: "House number and street name",
  },
  {
    type: "number",
    type: "text",
    field: "input",
    placeholder: "Apartment, Suite, Unit, etc.",
    name: "address_2",
    required: false,
  },
  {
    label: "Country/Region",
    type: "",
    field: "select",
    required: true,
    name: "country",
  },
  {
    label: "Town/City",
    required: true,
    field: "input",
    type: "text",
    name: "city",
    placeholder: "",
  },
  {
    label: "Province",
    required: true,
    field: "select",
    type: "text",
    name: "state",
    placeholder: "",
  },
  {
    label: "Postal Code",
    altLabel: "ZIP Code",
    required: true,
    field: "input",
    type: "text",
    name: "postcode",
    placeholder: "",
  },
  {
    label: "Phone",
    required: true,
    field: "input",
    type: "tel",
    name: "phone",
    placeholder: "Phone",
    pattern: "^[0-9]{3,45}$",
    maxLength: 16,
    minLength: 6,
  },
  {
    label: "Email Address",
    required: true,
    field: "input",
    type: "email",
    name: "email",
    placeholder: "Email Address",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
  },
];