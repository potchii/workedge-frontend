import style from "./contactSection.module.css";

function contactSection() {
  const email = "contact@workedge.tech";

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1 className="text-7xl font-bold text-white tracking-widest pb-24 uppercase">
            Let's Chat.
          </h1>

          <div className="w-full flex flex-row space-x-24">
            <div className={`${style.anotherInput} flex w-1/2 flex-col`}>
              <form
                action="https://formsubmit.co/benitezernest14@gmail.com"
                method="POST"
              >
                <label for="name">
                  Name <span className="text-amber-800">*</span>
                </label>
                <input type="text" name="name" id="name" required />

                <label for="email">
                  Email <span className="text-amber-800">*</span>
                </label>
                <input type="email" name="email" id="email" required />

                <label for="message">
                  Input your message <span className="text-amber-800">*</span>
                </label>
                <textarea
                  name="message"
                  className="bg-[#22222266]"
                  id="message"
                ></textarea>

                <button type="submit" className={style.formButton}>
                  Send
                </button>
              </form>
            </div>

            <div className="flex w-1/2 h-1/2 flex-col">
              <div class="flex flex-row">
                <a href="mailto:contact@workedge.tech">
                  <h1 className="text-xl font-bold text-white uppercase hover:opacity-75">
                    {email}
                  </h1>
                </a>
              </div>

              <p className="text-gray-400 text-xl pt-2">
                Nova Tierra Village, Davao del Sur, Davao City, Philippines,
                8000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contactSection;
