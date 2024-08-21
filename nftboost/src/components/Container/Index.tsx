import { twMerge } from "tailwind-merge";

type TProps = {
  children?: React.ReactNode;
  className: string;
};

const Index = ({ children, className }: TProps) => {
  const defaultClass = "w-full max-w-grid mx-auto px-3";
  const combinedClasses = twMerge(defaultClass, className);
  return <div className={combinedClasses}>{children}</div>;
};

export default Index;
