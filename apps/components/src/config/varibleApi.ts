export let API_URL: string;
export let CLIENT_ID: string;
export let CLIENT_SECRET: string;
export let GRANT_TYPE: string;
export let NOTIFICATION_TOKEN: string | null;
export let CLIENT_NAME: string;

export const setAPI_URL = (url: string) => (API_URL = url);
export const setCLIENT_ID = (id: string) => (CLIENT_ID = id);
export const setCLIENTE_SECRET = (secret: string) => (CLIENT_SECRET = secret);
export const setGRANT_TYPE = (type: string) => (GRANT_TYPE = type);
export const setNOTIFICATION = (notification: string | null) =>
  (NOTIFICATION_TOKEN = notification);
export const setCLIENT_NAME = (name: string) => (CLIENT_NAME = name);

export default function main() {
  API_URL = process.env.API_URL ?? '';
  CLIENT_ID = process.env.CLIENT_ID ?? '';
  CLIENT_SECRET = process.env.CLIENT_SECRET ?? '';
  GRANT_TYPE = process.env.GRANT_TYPE ?? '';
  NOTIFICATION_TOKEN = process.env.NOTIFICATION_TOKEN ?? null;
  CLIENT_NAME = process.env.CLIENT_NAME ?? '';
}
