import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { fetchPageBlocks, fetchPages, notion } from "@/utils/notion";


export const GET1 = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
    orderBy: {
      createdAt: "desc",
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 2;

  try {
    const postNotions = await fetchPages();
    if (!postNotions) notFound();
    const count = postNotions.results.length;

    let posts = []
    postNotions.results.forEach(p => {
      let post = {
        _id: p.id,
        createdAt: p.created_time,
        slug: p.properties.Slug.rich_text[0].plain_text,
        title: p.properties.Title.title[0].plain_text,
        desc: "test",
        img: "https://firebasestorage.googleapis.com/v0/b/blog-92703.appspot.com/o/1718160532588IMG_1995.jpg?alt=media&token=40886696-aa3d-4323-a818-06b7655571a1",
        catSlug: p.properties.Category.select.name,
        userEmail: "cong.le@vtijs.com"
      }

      posts.push(post)
    });

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// CREATE A POST
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
