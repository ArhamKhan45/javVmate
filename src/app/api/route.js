import { databaseconnect } from "@/util/databaseconnect.js";
export async function GET(request, response) {
  await databaseconnect();
  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
