

interface BreakdownProps {
  amount: number | string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
}

const PymtBreakdown = ({
  amount,
  subtitle,
  className = "",
}: BreakdownProps) => {
  const breakdownClasses = {
    amountStyle: "font-bold text-[#082353] text-[0.9rem]",
    subtitleStyle: "",
  };

  // const [monthlyMetrics] = useState(() => {
  //   if (amount === "monthlyActivePaymentNumber")
  //     return Math.floor(Math.random() * 30) + 20;
  //   if (amount === "monthlyActivePaymentValue")
  //     return Math.floor(Math.random() * 30);
  //   return 0;
  // });

  return (
    <div className={className} style={{ border: "1px solid blue" }}>
      <p className={breakdownClasses.amountStyle}>{amount}</p>
      <p className="text-[0.7rem]">{subtitle}</p>
    </div>
  );
};

export default PymtBreakdown;
