import imageBox from "../../components/molecules/image-box/image-box";
import post from "../../components/organisms/post";
import { Page } from "../../interfaces";
import parkInnovationJpg from "./images/park-innovation.jpg";

export default function about(): Page {
  const parkImage = imageBox(
    parkInnovationJpg,
    {
      alt: "Two men on a bench in a park",
    },
    "Fig.1: Just like that."
  );

  const page: Page = post("About this project", [
    "Once upon a time, Herman and I were walking through the park. As usual, we talked about innovation and stuff...",
    parkImage,
    "What if you do not use a framework for web development? Just Javascript... ugh... Typescript please. And some Next Generation Frontend Tooling, but no HTML in the mix. Just generate DOM elments with uhhhh... document.createElement or something?",
  ]);

  page.displayName = "About";

  return page;
}
