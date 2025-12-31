interface BreakdownProps {
  amount: number | string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
}

const Breakdown = ({
  amount,
  subtitle,
  className = "",
  children,
}: BreakdownProps) => {
  const breakdownClasses = {
    amountStyle: "font-bold text-[#082353] text-[0.9rem]",
    subtitleStyle: "",
  };
  return (
    <div className={className}>
      <p className={breakdownClasses.amountStyle}>{amount}</p>
      <p className="text-[0.7rem]">{subtitle}</p>
    </div>
  );
};

export default Breakdown;
