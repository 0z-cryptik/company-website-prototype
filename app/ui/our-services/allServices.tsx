import { services } from "./services";
import { EachService } from "./eachService/eachService";

export const AllServices = () => {
  return (
    <section className="grid grid-cols-2 gap-[3rem] mx-[10rem] mt-[3rem]">
      {services.map((service, i) => (
        <EachService
          key={i}
          heading={service.heading}
          text={service.text}
          image={service.image}
          imageAlt={service.imageAlt}
        />
      ))}
    </section>
  );
};
