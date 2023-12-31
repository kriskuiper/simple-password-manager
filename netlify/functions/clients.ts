import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        name: "Payroll Select",
        color: "#0000FF",
      },
      {
        name: "Benu Direct",
        color: "#259617",
      },
      {
        name: "Schotpoort Connect",
        color: "#e3c922",
      },
      {
        name: "KNHB",
        color: "#e39c22",
      },
    ]),
  };
};

export { handler };
