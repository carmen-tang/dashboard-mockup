import type { Route } from "./+types/home";
import Main from "../main/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ideon Assessment - Carmen Tang" },
    { name: "description", content: "Carmen Tang's Ideon Assessment App" },
  ];
}

export default function Home() {
  return <Main />;
}
