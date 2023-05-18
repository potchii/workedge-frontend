import style from "./showreel.module.css";

function Showreel() {
  return (
    <div>
      <div className="h-screen bg-secondary flex flex-col items-center justify-center">
        <div className={`$ {style.container} `}>
          <h1 className="text-4xl text-white">
            What we've done for our clients
          </h1>

          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div>
              <div className={"$ {style.gridContainer}"}>TEST</div>
            </div>

            <div>01</div>

            <div>01</div>

            <div>01</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showreel;
