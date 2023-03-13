import { Board } from "./index.styles"
import { Link } from "react-router-dom";

export default function UIOtherOptions() {

  return(
    <Board>

      <li>
        <button>
          <img src="/assets/icons/login/google.png" alt="google" />
        </button>
      </li>

      <li>
        <Link to="/">
          <img src="/assets/icons/login/guest.png" alt="guest" />
        </Link>
      </li>

  </Board>
  )
}