import { userDetail } from "@/schema/userDetail";
import { errorHandler } from "@/util/apihandlers";
import { databaseconnect } from "@/util/databaseconnect";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};
export const GET = async (request) => {
  return NextResponse.json(
    {
      success: true,
    },
    {
      status: 200,
    }
  );
};

export const POST = async (request) => {
  await databaseconnect();
  const body = await request.json();
  console.log(body);

  const newuser = await userDetail.create({ body });
  console.log(newuser);

  return NextResponse.json(
    { success: true, newuser },
    {
      status: 201,
    }
  );
};
