import {
  GetLocalVariablesResponse,
  PostVariablesRequestBody,
  PostVariablesResponse,
} from "@figma/rest-api-spec";

export default class FigmaApi {
  private baseUrl = "https://api.figma.com";
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  async getLocalVariables(fileKey: string) {
    const resp = await fetch(
      `${this.baseUrl}/v1/files/${fileKey}/variables/local`,
      {
        headers: {
          Accept: "*/*",
          "X-Figma-Token": this.token,
        },
      }
    );
    if (!resp.ok) throw new Error(`Figma API error: ${resp.status}`);
    return (await resp.json()) as GetLocalVariablesResponse;
  }

  async postVariables(fileKey: string, payload: PostVariablesRequestBody) {
    const resp = await fetch(`${this.baseUrl}/v1/files/${fileKey}/variables`, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "X-Figma-Token": this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!resp.ok) throw new Error(`Figma API error: ${resp.status}`);
    return (await resp.json()) as PostVariablesResponse;
  }
}
