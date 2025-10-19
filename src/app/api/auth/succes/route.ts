import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user || !user.id) {
        throw new Error("Something went wrong with authentication")
    }

    let dbUser = await prisma.user.findUnique({
        where: { kindeId: user.id }
    })

    if (!dbUser) {
        dbUser = await prisma.user.create({
            data: {
                kindeId: user.id,
                firstName: user.given_name ?? "",
                lastName: user.family_name ?? "",
                email: user.email ?? ""
            }
        })
    }

    return NextResponse.redirect("http://localhost:3000")
}
