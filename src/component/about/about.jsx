import style from "./about.module.css";
import aboutImg from "./the-team.jpg";
import aboutImg1 from "./the-team1.jpg";
import aboutImg2 from "./the-team2.jpg";

function about() {
  const images = [aboutImg, aboutImg1, aboutImg2];

  return (
    <div>
      <div className={style.container}>
        <div className={style.imageOverlay}>
          <div className={style.rowContainer}>
            <div className="w-1/2 flex flex-col">
              <h1 className="text-7xl font-black text-primary uppercase tracking-widest">
                ABOUT US.
              </h1>

              <p>
                Founded in late 2022 by Eugene Serado, Ernest Benitez, and
                Christian Tan, <span className="text-primary">WorkEdge</span>{" "}
                began with the initial vision of creating a marketplace platform
                for remote freelance workers. However, driven by a series of
                internal reforms, the company pivoted its focus to become a
                dynamic digital marketing agency. Leveraging their expertise and
                experience, WorkEdge now specializes in providing comprehensive
                branding and creative solutions to a diverse range of clients,
                including esteemed international companies.
              </p>

              <p>
                With their events and organization service, they ensure seamless
                planning and execution for impactful experiences, from corporate
                conferences to product launches. The creative design team
                specializes in motion graphics, web development, and graphic
                design, crafting visually stunning websites, captivating motion
                graphics, and impactful branding collateral.
              </p>
            </div>

            <div className={`${style.aboutContainers} w-1/2 h-full`}>
              <div className={`${style.aboutImages}`}>
                <div className="w-1/2 flex flex-col gap-24">
                  <img
                    src={images[0]}
                    className="hover:scale-105 ease-in transition-all"
                  ></img>

                  <img
                    src={images[2]}
                    className="hover:scale-105 ease-in transition-all"
                  ></img>
                </div>

                <div className="w-1/2 flex items-center justify-center">
                  <img
                    src={images[1]}
                    className="hover:scale-105 ease-in transition-all ml-24"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
