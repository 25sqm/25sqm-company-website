import { MantineThemeOverride, ThemeIcon } from "@mantine/core";

export const BrandTheme: MantineThemeOverride = {
  colorScheme: "light",
  defaultRadius: "md",
  fontFamily: "Inter, sans-serif",
  primaryColor: "brand",
  colors: {
    brand: [
      "#D8F3DC",
      "#B7E4C7",
      "#95D5B2",
      "#74C69D",
      "#52B788",
      "#40916C",
      "#2D6A4F",
      "#1B4332",
      "#081C15",
    ],
  },
  headings: {
    fontFamily: "Work Sans",
    sizes: {
      h1: { fontSize: 38 },
      h2: { fontSize: 26 },
      h3: { fontSize: 20 },
      h4: { fontSize: 18 },
      h5: { fontSize: 16 },
      h6: { fontSize: 14 },
    },
  },
};
