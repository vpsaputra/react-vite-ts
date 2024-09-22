import googlePlay from "@assets/google-play.png";
import appStore from "@assets/app-store.png";
const questions = [
  {
    title: "App installation failed, how to update system information? ",
    content: [
      "Restart Your Device: Sometimes a simple restart can resolve installation issues.",
      "Check for Updates: Go to your device settings and check for any available system updates.",
      "Clear Cache: Navigate to the app settings and clear the cache for the app you’re trying to install.",
      "Free Up Space: Ensure you have enough storage space available by deleting unused apps or files.",
      "Reinstall the App: Try downloading the app again from the official app store.",
    ],
  },
  {
    title: "Where can I Download AppLab?",
    content:
      "You can find AppLab on Playstore and AplleStore or using Download button on this page",
  },
  {
    title: "Why can't I find AppLab on PlayStore? ",
    content:
      "Make sure you typen the app name correctly and your Android version is 6.0+. (Marsmellow or newer version) ",
  },
];

function Faqs() {
  return (
    <>
      <div className="faqs">
        <div className="section">
          <div className="text-center">
            <h1>Frequently Asked Questions</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Expedita excepturi maxime dolore quo, ipsa voluptatibus <br />
            sed suscipit laudantium dolorum maiores fugit dolorem dignissimos
            <br />
            explicabo nesciunt cum minus ullam labore reprehenderit!
          </div>

          <div className="faq-items">
            {questions.map((item, index) => (
              <details key={index}>
                <summary>{item.title}</summary>
                {Array.isArray(item.content) ? (
                  <ol>
                    {item.content.map((items, indexes) => (
                      <li key={indexes}>{items}</li>
                    ))}
                  </ol>
                ) : (
                  <p>{item.content}</p>
                )}
              </details>
            ))}
          </div>

          <h1>Download Our App Now!</h1>
          <h4 className="transparent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
            Neque officia reiciendis omnis explicabo cupiditate molestias,{" "}
            <br /> ea dicta fugit quibusdam aliquid eligendi, necessitatibus rem
            id <br /> minima repellendus inventore eos, aliquam magni.
          </h4>
          <div className="gap2">
            <img src={googlePlay} alt="" />
            <img src={appStore} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
