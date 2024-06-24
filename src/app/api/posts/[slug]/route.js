import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { fetchPageBlocks, fetchPageBySlug, notion } from "@/utils/notion";
import { NotionRenderer } from "@notion-render/client";

import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

import { notFound } from "next/navigation";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const postNotion = await fetchPageBySlug(slug);
    if (!postNotion) notFound();

    console.log(postNotion);
    const blocks = await fetchPageBlocks(postNotion.id);

    const renderer = new NotionRenderer({
      client: notion,
    });

    renderer.use(hljsPlugin());
    renderer.use(bookmarkPlugin());

    const html = await renderer.render(...blocks);

    return new NextResponse(JSON.stringify(html, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
