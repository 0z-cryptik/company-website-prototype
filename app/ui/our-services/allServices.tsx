import { services } from "./services";
import { EachService } from "./eachService/eachService";

export const AllServices = () => {
  return (
    <section className="grid min-[810px]:grid-cols-2 gap-3 md:gap-[1.5rem] lg:gap-[3rem] lg:mx-[1rem] xl:mx-[10rem] mt-[3rem] max-lg:px-5">
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
