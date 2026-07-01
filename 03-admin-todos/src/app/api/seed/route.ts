import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data:[
      {description: 'Gema del alma', complete: true},
      {description: 'Gema del poder'},
      {description: 'Gema del tiempo'},
      {description: 'Gema del espacio'},
      {description: 'Gema del realidad'},
    ]
  })

  return NextResponse.json({
    message: 'Seed executed'
  })
}