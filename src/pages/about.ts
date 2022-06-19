import { imageBox, page, post } from "../components";
import { Page } from "../types";
import parkInnovationJpg from "./assets/park-innovation.jpg";

export function about(): Page {
  const parkImage = imageBox(
    parkInnovationJpg,
    {
      alt: "Two men on a bench in a park",
    },
    "Fig.1: Just like that."
  );

  return page(
    "About",
    post("About this project", [
      "Once upon a time, Herman and I were walking through the park. As usual, we talked about innovation and stuff...",
      parkImage,
      "What if you do not use a framework for web development? Just Javascript... ugh... Typescript please. And some Next Generation Frontend Tooling, but no HTML in the mix. Just generate DOM elments with uhhhh... document.createElement or something? What would it look like? How far could we go?",
    ])
  );
}
