import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            screens: {
                //prajna
                xs: "472px",
                //======
                "3xl": "1700px",
            },

            width: {
                custom1: "56.5%",
            },

            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                workSans: ["WorkSans", "sans-serif"],
            },
            colors: {
                backgroundImage: {
                    "gradient-radial":
                        "radial-gradient(var(--tw-gradient-stops))",
                    "gradient-conic":
                        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                },
                //russel
                //custom
                NeonGreen: "#B9F73E",
                PurpleBlue: "#5056ff",
                GrassGreen: "#81B518",
                //Neutral
                Neutral300: "#FFFFFF",
                Neutral400: "#EEF2F9",
                Neutral500: "#D8DFEB",
                Neutral700: "#8492A7",
                Neutral600: "#B6C0D1",
                Neutral800: "#3C4859",
                Neutral900: "#273445",
                Neutral1000: "#1E2D3E",
                //Black
                Black50: "#F3F3F3",
                Black100: "#E6E6E6",
                Black200: "#CCCCCC",
                Black300: "#B3B3B3",
                Black400: "#999999",
                Black500: "#808080",
                Black600: "#666666",
                Black700: "#4D4D4D",
                Black800: "#333333",
                Black900: "#1A1A1A",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        //prajna ==============================
        function ({ addUtilities }: PluginAPI) {
            addUtilities({
                ".scrollbar-hide": {
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none",
                },
            });
        },
        //==================================
    ],
} satisfies Config;

export default config;
