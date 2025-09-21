import { Request, Response } from "express";
import { makeOptions } from "../utils/config";

/**
 * Send a single PNG, test-001.png
 */
export const sendSinglePNG = (_req: Request, res: Response) => {
  const options = makeOptions();
  res.sendFile(`test-001.png`, options);
};

/**
 * Send a simple PNG with either a 'layer' query param, or a 'testNumber' route param
 */
export const sendSimplePNG = (req: Request, res: Response) => {
  const options = makeOptions();
  const req_layer = req.query.layer;
  const req_fle = req_layer ?? req.params.testNumber.replace("_files", "");

  res.sendFile(`test-${req_fle}.png`, options);
};

/**
 * Send a PNG. If a query param 'layer' is present, use that as the file name, appending '-a' to the end.
 * Otherwise, use the route param 'testNumber'
 */
export const sendQueryPNG = (req: Request, res: Response) => {
  const options = makeOptions();

  const req_layer = req.query.layer;
  const req_fle = req_layer
    ? `${req_layer}-a`
    : req.params.testNumber.replace("_files", "");

  res.sendFile(`test-${req_fle}.png`, options);
};

/**
 * Send a PNG. If a query param 'hidden' is present, use the hidden image. Otherwise, use the route param 'testNumber'
 */
export const sendHiddenPNG = (req: Request, res: Response) => {
  const options = makeOptions();

  const requestHiddenImage = req.query.hidden === "true" || false;
  if (requestHiddenImage) {
    res.sendFile(`test-hidden.png`, options);
  } else {
    const req_fle = req.params.testNumber.replace("_files", "");
    res.sendFile(`test-${req_fle}.png`, options);
  }
};

/**
 * Send a single JPG, test-jpg.jpg
 */
export const sendSingleJPG = (_req: Request, res: Response) => {
  const options = makeOptions();
  res.sendFile(`test-jpg.jpg`, options);
};

export const routes = {
  sendSimplePNG: "/img/:testNumber/**",
  sendQueryPNG: "/img-query/:testNumber/**",
  sendHiddenPNG: "/img-hidden/:testNumber/**",
  sendSinglePNG: "/img-single/**",
  sendSingleJPG: "/img-jpg/**",
};
