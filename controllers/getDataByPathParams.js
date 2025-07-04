import { startups } from "../data.js";

export const getDataPathParams = (req, res) => {
  const { field, term } = req.params;
  const allowedFields = ["country", "continent", "industry"];

  if (allowedFields.includes(field)) {
    let filteredData = startups.filter(
      (startup) => startup[field].toLowerCase() === term.toLowerCase()
    );
    res.json(filteredData);
  } else {
    const errorMSG = {
      message:
        "Search field not allowed. Please use only 'country', 'continent', 'industry'",
      status: 400,
    };
    res.status(400).json(errorMSG);
  }
};
