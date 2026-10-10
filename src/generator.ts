import { type Model } from "mongoose";
import { type SchemaDefType } from "./types.js";

export const generateZodSchemas = (model: Model<unknown>) => {
  const schema = model.schema.toJSONSchema() as SchemaDefType;

  console.log(schema);
};
