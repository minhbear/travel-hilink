import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icons?: string;
  variant: string;
  full?: boolean
};

const Button = ({ title, type, variant, icons, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
    >
      {icons && <Image src={icons} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
