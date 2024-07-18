import { Bodoni_Moda, Bebas_Neue, IBM_Plex_Mono } from "next/font/google";

export const bodoniModa = Bodoni_Moda({ subsets: ["latin"] });
export const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
export const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["cyrillic"],
  weight: "600"
});
