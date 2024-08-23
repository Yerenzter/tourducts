import { Link } from "react-router-dom";

export default function HappySunset() {
  return (
    <div className="row">
      <div id="attraction-happy-sunset" className="col s12 h-96 relative">
        <div className="attraction-banner-backdrop h-full grid content-end p-3">
          <h1 className="text-3xl text-white">
            <strong>HAPPY SUNSET RECREATIONAL RESORT</strong>
          </h1>
          <h2 className="text-2xl text-white">
            <strong>Brgy. Salvacion, Belison Antique</strong>
          </h2>
        </div>
      </div>

      <div className="col s12 p-3 text-white">
        <h1 className="text-3xl">
          <strong>Information</strong>
        </h1>
        <p className="indent-5 text-justify">
          <strong>HAPPY SUNSET RECREATIONAL RESORT</strong> is an accredited DOT
          Recreation Center that provides guests wih an enjoyable and memorable
          experience.
        </p>
        <br />

        <ul>
          <span>
            Fun facts &amp; trivia about Happy Sunset Recreational Resort
          </span>
          <li>
            <i
              className="material-icons"
              style={{ fontSize: "1.2rem", textWrap: "pretty" }}
            >
              arrow_forward
            </i>
            &nbsp;<q>When happiness meets the sunset</q>
          </li>
          <li>
            <i
              className="material-icons"
              style={{ fontSize: "1.2rem", textWrap: "pretty" }}
            >
              arrow_forward
            </i>
            &nbsp;Open Tuesday to Sunday
          </li>
          <li>
            <i
              className="material-icons"
              style={{ fontSize: "1.2rem", textWrap: "pretty" }}
            >
              arrow_forward
            </i>
            &nbsp;Located at Brgy. Salvacion, Belison, Antique
          </li>
          <li>
            <i
              className="material-icons"
              style={{ fontSize: "1.2rem", textWrap: "pretty" }}
            >
              arrow_forward
            </i>
            &nbsp;Accept booking for reservations, walk-ins
          </li>
          <li>
            <i
              className="material-icons"
              style={{ fontSize: "1.2rem", textWrap: "pretty" }}
            >
              arrow_forward
            </i>
            &nbsp;Caters one family or group at a time as well as decorations
            for different events
          </li>
          <li>
            <i
              className="material-icons"
              style={{ fontSize: "1.2rem", textWrap: "pretty" }}
            >
              arrow_forward
            </i>
            &nbsp;Has a bar counter that is accessible for refreshments and
            beverages
          </li>
        </ul>
      </div>

      <div className="col s6 text-white p-3">
        <ul className="text-justify">
          <span>Restaurant Diners: Free Entrance</span>
          <br />
          <center>
            <strong>
              <span className="text-center">
                *Free entrance and swimming for kids below 3ft.*
              </span>
            </strong>
          </center>
          <br />
          <span>
            <strong className="text-2xl">COTTAGES</strong>
          </span>
          <li>Php 1,200........................Bamboo Gazebo (16-20 pax)</li>
          <li>Php 1,000........................Bamboo Lumpagi (14-18 pax)</li>
          <li>
            Php 200..........................Picnic Umbrella (4-6 pax) 6 hrs
            maximum
          </li>
          <br />
          <span>
            <strong className="text-2xl">
              FUNCTION HALL FOR SPECIAL EVENTS
            </strong>
          </span>
          <li>
            Php 10,000.......................Open Function Hall (80-100 pax)
          </li>
          <br />
          <span>Inclusions: Lights, Sounds, Tables and Chairs (100max)</span>
          <br />
          <span>
            <strong>*Also offers catering services and decorations*</strong>
          </span>
        </ul>
      </div>

      <div className="col s6 text-white p-3">
        <ul className="text-justify">
          <span>
            <strong className="text-2xl">ENTRANCE FEE/PRICES:</strong>
          </span>
          <span>Booking and walk-ins is accepted</span>
          <li>Php 50...........................General Entrance Fee</li>
          <li>Php 1,000........................Bamboo Lumpagi (14-18 pax)</li>
          <br />
          <span>Daytime Rate Tue-Sun(11am - 5pm)</span>
          <li>
            Php 100............................Swimming w/ entrance fee (Adult)
          </li>
          <li>
            Php 80.............................Swimming w/ entrance fee
            (Children)
          </li>
          <br />
          <span>Nighttime Rate Tue-Sun(5:30 - 9pm)</span>
          <li>
            Php 120............................Swimming w/ entrance fee (Adult)
          </li>
          <li>
            Php 100............................Swimming w/ entrance fee
            (Children)
          </li>
        </ul>
      </div>

      <div className="col s12 grid justify-items-center fixed right-0 left-0 bottom-0 py-5">
        <Link to="/belison/attractions/happy-sunset/pictures">
          <button
            className="btn bg-orange-950 waves-effect waves-light text-white rounded"
            type="button"
          >
            <strong>Pictures</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}
