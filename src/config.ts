import path from "path";
import { pathToFileURL } from "url";

export type Config = {
  zodSchemaDir?: string;
  generateTypes?: boolean;
};

const defaultValues: Config = {
  zodSchemaDir: "./src/zod",
  generateTypes: true,
};

export const defineConfig = (config: Config) => ({
  ...defaultValues,
  ...config,
});

export const loadConfig = async (): Promise<Config> => {
  const configFileName = "zmongo.config.mjs";
  const absPath = path.resolve(process.cwd(), configFileName);
  let userDefinedConfig = Object.create(null);

  try {
    const fileUrl = pathToFileURL(absPath).href;
    const imported = await import(fileUrl);

    userDefinedConfig = defaultValues || imported;

    return {
      ...defaultValues,
      ...userDefinedConfig,
    } as const;
  } catch (error: any) {
    if (error.code === "ERR_MODULE_NOT_FOUND" || error.code === "ENOENT") {
      return defaultValues;
    }

    throw error;
  }
};
