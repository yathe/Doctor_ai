import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const user = await currentUser();
    try {
      // Check if User Already Exist
      const users=await db.select().from(usersTable)
      // @ts-ignore
      .where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress))
      // If Not Then Create New User
      if(users?.length == 0){
      const result=await db.insert(usersTable).values({
        name:user?.fullName,
        email:user?.primaryEmailAddress?.emailAddress,
        credits:10
      }).returning({ usersTable })
      return NextResponse.json(result?.usersTable);
      }
      return NextResponse.json(users[0]?.usersTable)// this user contain list need to provide first
    } catch (error) {
      return NextResponse.json(error);
    }
}