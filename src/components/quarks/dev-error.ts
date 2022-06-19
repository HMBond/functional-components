import { container } from "../organisms/container";
import "./dev-error.css";
import { element } from "./element";

export function devError(error: any): HTMLElement[] {
  return [
    container(
      [
        element("h2", {
          innerText: error.message,
        }),
        element("code", {
          innerText: error.stack,
        }),
      ],
      {
        className: "dev-error",
      }
    ),
  ];
}
