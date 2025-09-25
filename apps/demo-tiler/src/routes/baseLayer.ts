import { Request, Response } from "express";
import path from "path";

function makeOptions() {
  return {
    root: path.join(__dirname, "..", "assets", "base-layer"),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  } as const;
}

export const sendMetaXML = (_req: Request, res: Response) => {
  const options = makeOptions();
  res.sendFile(`meta.xml`, options);
};

export const sendSinglePNG = (_req: Request, res: Response) => {
  const options = makeOptions();
  res.sendFile(`mars-map-maxres_0_0_0.png`, options);
};

export const routes = {
  sendSinglePNG: "/base-layer/**",
};
