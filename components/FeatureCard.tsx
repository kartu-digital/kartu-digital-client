import Image from "next/image";
import feature1 from "@/public/images/feature1.svg";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="lg:border-5 flex flex-col items-center rounded-[50px] border-2 px-10 py-8 text-center lg:w-4/5 lg:px-20 lg:py-16 2xl:w-[40%]">
      <Image
        className="bg-NeonGreen w-20 rounded-3xl p-4 lg:w-40 lg:rounded-[50px] lg:p-8"
        src={icon}
        alt=""
      />
      <h1 className="pt-8 text-xl font-bold lg:text-3xl">{title}</h1>
      <p className="pt-8 text-[#4D4D4D] lg:text-xl">{description}</p>
    </div>
  );
}
