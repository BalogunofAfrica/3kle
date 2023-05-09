const categories = [
  {
    text: "FamilyPlus Savings",
    icon: "money",
  },
  {
    text: "Invest in Stocks",
    icon: "money_alt",
  },
  {
    text: "Early for kids",
    icon: "user",
  },
] as const;

const actions = [
  {
    text: "Portfolio",
    iconText: "Aggressive ",
  },
  {
    text: "Round-Up Settings",
    iconText: "Automatic",
  },
  {
    text: "Recurring",
    iconText: "$20/Monthly",
  },
  {
    text: "Beneficiary",
    iconText: "1 Child",
  },
  {
    text: "One-time Investment",
    iconText: "",
  },
] as const;

const transactions = [
  {
    amt: "$20",
    body: "Processing",
    heading: "One Time Investment",
  },
  {
    amt: "$-8.00",
    body: "Processing",
    heading: "Withdrawal",
  },
  {
    amt: "$10.36",
    body: "Processing",
    heading: "Round-Up Investment",
  },
] as const;

const knowledge = [
  {
    icon: "people",
    text: "What is Family Plus?",
  },
  {
    icon: "rotate",
    text: "How do Round-Ups work?",
  },
  {
    icon: "money_alt2",
    text: "What is FamilyPlus Savings?",
  },
  {
    icon: "wallet",
    text: "How can I withdraw my money?",
  },
] as const;

const dots = Array.from({ length: 4 }, (_, index) => index !== 0);

export { actions, categories, dots, knowledge, transactions };
