// import { ButtonProps } from "@/components/ui/button"; //shadcn button
import { ButtonProps } from "@/components/ui/button"; //shadcn button

interface Plan {
  isHeader: boolean;
  theme?: {
    tagBgColor: string;
    tagTextColor: string;
    buttonVariant: ButtonProps["variant"];
  };
  plan: {
    title?: string;
    type?: string;
    tag?: string;
    price?: number;
    description: string;
    buttonMsg?: string;
    planColor?: string;
    textColor?: string;
  };
  number_of_websites: string;
  users_per_page: string;
  premium_theme: boolean | string;
  custom_domain: boolean | string;
  designing_and_development: boolean | string;
  customizable: boolean | string;
  secure_data_storage: boolean | string;
  email_support: boolean | string;
  customer_support: boolean | string;
  analytics_and_reporting: boolean | string;
}

const plans: Plan[] = [
  {
    isHeader: true,
    plan: {
      title: "Compare plans",
      description:
        "Choose your workspace plan according to your organisational plan",
    },
    number_of_websites: "Number of Website",
    users_per_page: "User Per Page",
    premium_theme: "Premium Theme",
    custom_domain: "Custom Domain",
    designing_and_development: "Designing & Development",
    customizable: "Customizable options to meet your specific needs",
    secure_data_storage: "Secure data storage",
    email_support: "Email Support",
    customer_support: "24/7 customer support",
    analytics_and_reporting: "Analytics and reporting",
  },
  {
    isHeader: false,
    theme: {
      tagBgColor: "black",
      tagTextColor: "white",
      buttonVariant: "black",
    },
    plan: {
      type: "Free",
      tag: "Gratis",
      price: 0,
      description: "Coba Kartu Digital secara gratis.",
      buttonMsg: "Coba Gratis",
      planColor: "black-outline",
      textColor: "white",
    },
    number_of_websites: "1 Website",
    users_per_page: "5 Pages",
    premium_theme: true,
    custom_domain: true,
    designing_and_development: false,
    customizable: false,
    secure_data_storage: false,
    email_support: false,
    customer_support: false,
    analytics_and_reporting: false,
  },

  {
    isHeader: false,
    theme: {
      tagBgColor: "PurpleBlue",
      tagTextColor: "white",
      buttonVariant: "purple_blue",
    },
    plan: {
      type: "Premium",
      tag: "Populer",
      price: 100000,
      description: "Dilengkapi tema-tema esensial.",
      buttonMsg: "Pilih Paket ini",
      planColor: "PurpleBlue",
      textColor: "white",
    },
    number_of_websites: "50 Website",
    users_per_page: "50 Pages",
    premium_theme: true,
    custom_domain: true,
    designing_and_development: true,
    customizable: true,
    secure_data_storage: false,
    email_support: false,
    customer_support: false,
    analytics_and_reporting: true,
  },
  {
    isHeader: false,
    theme: {
      tagBgColor: "NeonGreen",
      tagTextColor: "black",
      buttonVariant: "neon_green",
    },
    plan: {
      type: "Exclusive",
      tag: "Populer",
      price: 330000,
      description: "Dilengkapi seluruh fitur yang ada.",
      buttonMsg: "Pilih Paket ini",
      planColor: "neon-green",
      textColor: "black",
    },
    number_of_websites: "Unlimited",
    users_per_page: "Unlimited",
    premium_theme: true,
    custom_domain: true,
    designing_and_development: true,
    customizable: true,
    secure_data_storage: true,
    email_support: true,
    customer_support: true,
    analytics_and_reporting: true,
  },
];

export default plans;
