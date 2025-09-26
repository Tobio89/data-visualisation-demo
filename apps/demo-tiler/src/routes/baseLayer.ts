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

export const sendSinglePNG = (req: Request, res: Response) => {
  const options = makeOptions();

  const { z, coords } = req.params;
  const coordsOnly = coords.replace(".png", "");
  const [x, y] = coordsOnly.split("_");

  let layer = parseInt(z);
  if (layer < 0) {
    layer = 0;
  } else if (layer > 7) {
    layer = 7;
  }

  const imagePath = `mars-map-maxres_${layer}_${y}_${x}.png`;
  res.sendFile(imagePath, options);
};

export const routes = {
  sendSinglePNG: "/base-layer/:image_name/:z/:coords",
};
