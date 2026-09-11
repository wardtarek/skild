import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="mark">
          <div className="glyph" />
        </div>
        <Link to="/">
          <span>Skild</span>
        </Link>
      </div>
      <div className="actions">
        <Link
          to="/sign-in/$"
          className="btn-primary"
        >
          <LogIn />
          Sign in
        </Link>
      </div>
    </nav>
  );
}
