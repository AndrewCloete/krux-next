import axios, { AxiosError } from "axios";

export type RegisterResult = "REGISTERED" | "ALREADY_REGISTERED" | "ERROR";
export type MembershipResult = "MEMBERSHIP_FORM" | "ERROR";
export type MembershipResponse = {
  outcome: MembershipResult;
  html: string | undefined;
};

export class BackendService {
  private static baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  private static stage = process.env.NEXT_PUBLIC_STAGE;

  constructor() {}

  async register(
    payload: { email: string; mailInterests: { [key: string]: boolean } },
    token: string
  ): Promise<RegisterResult> {
    async function req() {
      try {
        const result = await axios.post(
          `${BackendService.baseUrl}/${BackendService.stage}/register`,
          { ...payload, token },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = result.data as { outcome: RegisterResult };
        return data.outcome;
      } catch (error: any) {
        const err = error as AxiosError;
        if (err.response && [409].includes(err.response.status)) {
          console.warn(err.response);
          const data = err.response.data as { outcome: RegisterResult };
          return data.outcome;
        }
        console.error("Error", err.message);
        return "ERROR";
      }
    }
    return req();
  }

  async getMembershipFormHtml(
    payload: { email: string },
    token: string
  ): Promise<MembershipResponse> {
    async function req() {
      try {
        const result = await axios.post(
          `${BackendService.baseUrl}/${BackendService.stage}/membership_form`,
          { ...payload, token },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = result.data as { html: string };
        return {
          outcome: "MEMBERSHIP_FORM",
          html: data.html,
        } as MembershipResponse;
      } catch (error: any) {
        return { outcome: "ERROR", html: undefined } as MembershipResponse;
      }
    }
    return req();
  }
}
