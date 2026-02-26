export const title = [
  "Renter",
  "Phone number",
  "Location",
  "Employment status",
  "Salary",
  "accomodation status",
  "Requested amount",
  "created",
];

export const firstNames = [
  "James",
  "David",
  "Susan",
  "Mary",
  "Gloria",
  "Adam",
  "Ifeoma",
  "Johnson",
  "Uchenna",
];

export const lastNames = [
  "Dolly",
  "Uba",
  "Femi",
  "Philips",
  "Martin",
  "Ola",
  "Cole",
  "Morris",
];
export const accStatuses = ["Rent", "Store"];
export const locations = [
  "Lagos",
  "Ogun",
  "Port Harcourt",
  "Ibadan",
  "Onitsha",
  "Owerri",
];
export const empStatuses = [
  "Employed",
  "Self-employed",
  "Unemployed",
  "Employer",
];
export const payStatuses = ["On track", "Partial payment", "Defaulting"];
export const declineReasons = [
  "Incomplete Documents",
  "Unavailable in city",
  "Insuffucient net income",
];
export const colors = [
  "#820014",
  "#ff7a45",
  "#873800",
  "#ad6800",
  "#fadb14",
  "#bae637",
  "#389e0d",
  "#13c2c2",
  "#69c0ff",
  "#061178",
  "#9254de",
  "#eb2f96",
  "#434343",
];
export type TableRow = {
  fullName: string;
  initial: string;
  color: string;
  email?: string;
  phone: number | string;
  location: string;
  employmentStatus: string;
  salary: number | string;
  accommodationStatus: string;
  requestedAmount: number | string;
  created?: string;
};

type ContactInfo = {
  image: string;
  link: string;
  text: string;
};

export const contactInfo: ContactInfo[] = [
  {
    image: "/images/location-icon.svg",
    link: "https://www.google.com/maps?q=Ikoyi,+Lagos",
    text: "Ikoyi, Lagos",
  },
  {
    image: "/images/email-icon2.svg",
    link: "mailto:johnson023@gmail.com?subject=Rent%20Application&body=Hello%Precious,",
    text: "johnson023@gmail.com",
  },
  {
    image: "/images/phone.svg",
    link: "tel:+2348087566099",
    text: "tel:+2348087566099",
  },
  {
    image: "/images/send-email-icon.svg",
    link: "mailto:johnson023@gmail.com?subject=Rent%20Application&body=Hello%Precious,",
    text: "Send Email",
  },
  {
    image: "/images/request-file-icon.svg",
    link: "",
    text: "Request Document",
  },
  {
    image: "/images/whatsapp-icon.svg",
    link: "https://wa.me/2348087566099",
    text: "Whatsapp",
  },
];

interface PaymentStructure {
  amount?: string;
  duration?: string;
  title: string;
}

export const paymentStructureData: PaymentStructure[] = [
  {
    title: "Pre-Approved Amount",
    amount: "₦1,000,000",
  },
  {
    title: "Pre-Approved Monthly Payment",
    amount: "₦122,222.22",
  },
  {
    title: "Duration",
    duration: "9 Months",
  },
  {
    title: "Final Approved Amount",
    amount: "₦850,000",
  },
  {
    title: "Final Monthly Payment",
    amount: "₦70,833.33",
  },
  {
    title: "Duration",
    duration: "12 Months",
  },
];
interface LoanData {
  title: string;
  amount?: string;
  duration?: string;
  date?: string;
}

export const loanData: LoanData[] = [
  {
    title: "Monthly Payment",
    amount: "₦70,833.33",
  },
  {
    title: "Duration",
    duration: "2 of 12 months",
  },
  {
    title: "Last amount paid",
    amount: "₦70,833.33",
  },
  {
    title: "Next due date",
    date: "21 January, 2026",
  },
];

export const appDetails = [
  {
    label: "What's your accomodation status?",
    value: "Looking to renew my rent",
    valueClass: "text-[#082353] pl-4 block my-1 text-[0.85rem]",
  },
  {
    label: "How much is the requested amount?",
    value: "1,200,00",
    valueClass: "text-[#082353] pl-4 block my-1 text-[0.85rem]",
  },
  {
    label: "How much do you earn monthly?",
    value: "400,00",
    valueClass: "text-[#082353] pl-4 block my-1 text-[0.85rem]",
  },
  {
    label: "Choose a monthly repayment plan",
    value: "3 months",
    valueClass: "text-[#082353] pl-4 block my-1 text-[0.85rem]",
  },
];

export const monthlyActivePayments = {
  numberOfActivePayments: Math.floor(Math.random() * 30) + 20,
  numberOfDefaultPayments: Math.floor(Math.random() * 20) + 5,
  valueOfActivePayments: Math.floor(Math.random() * 4000000) + 5000000,

  //  valueOfActivePayments: Math.round(Math.random() * 10) * 500000 + 1000000,  This should be for yearly Total value of active payments
};

export const totaltimesOfPayment =
  monthlyActivePayments.numberOfActivePayments +
  monthlyActivePayments.numberOfDefaultPayments;

export const percentagePaidMonthly = Math.round(
  (monthlyActivePayments.numberOfActivePayments / totaltimesOfPayment) * 100,
);

export const percentageDefaultedMonthly = 100 - percentagePaidMonthly;
export const monthlyDefaultingPayments =
  (monthlyActivePayments.valueOfActivePayments / totaltimesOfPayment) *
  monthlyActivePayments.numberOfDefaultPayments;
