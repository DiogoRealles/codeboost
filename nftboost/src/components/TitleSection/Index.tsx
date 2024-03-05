type TProps = {
  title: string;
  subtitle: string;
};

const Index = ({ title, subtitle }: TProps) => {
  return (
    <header className="px-3 @desktop:px-0 mb-8 @desktop:mb-14 space-y-1">
      <span className="text-sm @desktop:text-xl font-body font-semibold text-white/70">
        {subtitle}
      </span>
      <h2 className="font-title text-3xl @desktop:text-5xl/tight font-semibold">
        {title}
      </h2>
    </header>
  );
};

export default Index;
