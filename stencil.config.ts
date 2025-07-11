import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "mycomponents",
  srcDir: "src",
  outputTargets: [
    {
      type: "dist",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null,
    },
  ],
  excludeUnusedDependencies: true,
};
