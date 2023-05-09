import { percent10, percent30, percent5, percent55 } from "@/assets/images";

const data = [
  {
    text: "Large Company Stocks(VOO)",
    image: percent55,
  },
  {
    text: "Medium Company Stocks (IJH)",
    image: percent10,
  },
  {
    text: "Small Company Stocks(IJR)",
    image: percent5,
  },
  {
    text: "International Company Stocks (IXUS) ",
    image: percent30,
  },
] as const;

const dots = Array.from({ length: 5 }, (_, index) => index === 3);

export { data, dots };
