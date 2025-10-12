import { Request, Response } from "express";
import path from "path";

function makeOptions() {
  return {
    root: path.join(__dirname, "..", "assets", "mars-d4"),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  } as const;
}

export const sendBaseMetaXML = (_req: Request, res: Response) => {
  const options = makeOptions();
  res.sendFile(`mars-d4-base-split/metadata.xml`, options);
};

export const sendBasePNG = (req: Request, res: Response) => {
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

  const imagePath = `mars-d4-base-split/mars-d4-base_${layer}_${y}_${x}.png`;
  res.sendFile(imagePath, options);
};
export const sendAnnotationMetaXML = (_req: Request, res: Response) => {
  const options = makeOptions();
  res.sendFile(`mars-d4-annotations-split/metadata.xml`, options);
};

export const sendAnnotationPNG = (req: Request, res: Response) => {
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

  const imagePath = `mars-d4-annotations-split/mars-d4-annotated_${layer}_${y}_${x}.png`;
  res.sendFile(imagePath, options);
};

export const routes = {
  sendBasePNG: "/mars-d4-base/:image_name/:z/:coords",
  sendBaseMetaXML: "/mars-d4-base/metadata.xml",
  sendAnnotationPNG: "/mars-d4-annotations/:image_name/:z/:coords",
  sendAnnotationMetaXML: "/mars-d4-annotations/metadata.xml",
};
