import type { ExistingModel } from "../index.js";
import {
  buildAciCatalogModel,
  createAciCatalogProvider,
  parseAciModels,
  resolveAciBaseModel,
  type AciModel,
} from "./aci.js";

export type RedPillModel = AciModel;

export const redpill = createAciCatalogProvider({
  id: "redpill",
  name: "RedPill",
  modelsDir: "providers/redpill/models",
  chatEndpoint: "https://api.redpill.ai/v1/models",
  embeddingEndpoint: "https://api.redpill.ai/v1/embeddings/models",
});

export function parseRedPillModels(raw: unknown) {
  return parseAciModels(raw, "RedPill");
}

export function buildRedPillModel(model: RedPillModel, existing: ExistingModel | undefined) {
  return buildAciCatalogModel(model, existing, "RedPill");
}

export const resolveRedPillBaseModel = resolveAciBaseModel;
