export type SchemaDataType = "object" | "sring" | "number" | "boolean" | "array" | "null";

export type SchemaDefType = {
  type: SchemaDataType;
  required?: string[];
  pattern?: string;
  properties?: Record<string, SchemaDefType>;
  additionalProperties?: SchemaDefType;
};
