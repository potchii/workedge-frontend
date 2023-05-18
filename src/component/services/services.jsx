import style from "./services.module.css";

function Services() {
  return (
    <div>
      <div className="flex items-center justify-center h-[80vh]">
        <div className={style.container}>
          <div className="flex flex-row space-x-28">
            <div className={` ${style.weDo} flex-col w-7/12`}>
              <h1 className="tracking-widest font-black text-7xl pb-4">
                WE DO.
              </h1>
              <p>
                We have expertise in crafting comprehensive solutions at{" "}
                <a href="/">WorkEdge</a> that are tailored to meet the specific
                requirements of both businesses and individuals. Our services
                are designed to cater to your unique needs.
              </p>

              <p className="pt-4">
                Hire vetted experts from our team with ease for any type of
                remote work you require. We use cutting-edge, scalable, and
                affordable outsourcing solutions to optimize your business
                processes.
              </p>
            </div>

            <div className={`${style.services} flex-col w-5/12`}>
              <div>
                Events & Organization
                <div className={style.line}></div>
              </div>

              <div>
                Motion Graphics Design
                <div className={style.line}></div>
              </div>

              <div>
                Web Development
                <div className={style.line}></div>
              </div>

              <div>
                Video Editing
                <div className={style.line}></div>
              </div>

              <div>
                Graphic Design
                <div className={style.line}></div>
              </div>

              <div>
                Virtual Assistant Services
                <div className={style.line}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
