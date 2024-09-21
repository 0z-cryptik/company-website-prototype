import {
  Bodoni_Moda,
  Bebas_Neue,
  IBM_Plex_Mono,
  Inknut_Antiqua,
  Space_Grotesk,
  Noto_Serif_Georgian
} from "next/font/google";

export const bodoniModa = Bodoni_Moda({ subsets: ["latin"] });

export const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["cyrillic"],
  weight: "600"
});

export const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "400"
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "300"
});

export const serif = Noto_Serif_Georgian({
  subsets: ["latin"],
  weight: "400"
});
