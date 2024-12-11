import { NextRequest } from "next/server";

interface ReqType {
  email: string;
  password: string;
}
export async function POST(req: NextRequest) {
  const body: ReqType = await req.json();

  console.log(body);

  return new Response(JSON.stringify(body));
}
