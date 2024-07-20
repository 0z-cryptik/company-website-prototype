interface Service {
  image: string;
  heading: string;
  text: string;
  imageAlt: string;
}

const apos = "&#39";

export const services: Service[] = [
  {
    heading: "Brand Development",
    text: "We help you create a strong brand identity that resonates with your target audience and sets you apart from the competition.",
    image: "",
    imageAlt: ""
  },
  {
    heading: "Digital Marketing",
    text: "Our digital marketing strategies are designed to increase your online presence and drive more traffic to your website.",
    image: "",
    imageAlt: ""
  },
  {
    heading: "Content Creation",
    text: "We produce high-quality content that engages your audience and supports your marketing goals.",
    image: "",
    imageAlt: ""
  },
  {
    heading: "Social Media Management",
    text: "We manage your social media accounts to build your brand, engage with your audience, and grow your online presence.",
    image: "",
    imageAlt: ""
  },
  {
    heading: "SEO Optimization",
    text: `Our SEO services improve your website${apos}s visibility on search engines, helping you attract more organic traffic.`,
    image: "",
    imageAlt: ""
  },
  {
    heading: "Fundraising",
    text: "We assist in raising money for initiatives so they can expand and produce higher-quality goods.",
    image: "",
    imageAlt: ""
  }
];
