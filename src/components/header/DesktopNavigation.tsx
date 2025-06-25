import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
const menu = [{
  name: "Início",
  href: "/"
}, {
  name: "Contato",
  href: "/contato"
}];
export default function DesktopNavigation() {
  const {
    isAuthenticated
  } = useAuth();
  return;
}