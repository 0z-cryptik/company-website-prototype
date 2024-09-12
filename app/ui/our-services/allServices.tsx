import { services } from "./services";
import { EachService } from "./eachService/eachService";

export const AllServices = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-3 lg:gap-[3rem] lg:mx-[10rem] mt-[3rem] max-lg:px-5">
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
