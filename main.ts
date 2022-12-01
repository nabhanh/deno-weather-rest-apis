import { Application, Router } from "oak/mod.ts"
import { oakCors } from "cors/mod.ts";

import { PrismaClient } from './prisma/generated/client/deno/edge.ts'

const app = new Application();

const client = new PrismaClient();

const router = new Router();

router.get("/", (ctx) => {
    console.log(ctx.request.headers);
    ctx.response.body = "Hello World";
}).get("/test", (ctx) => {
    ctx.response.body = "Test";
});

app.use(oakCors());

app.use(router.routes());
app.listen({ port: 3000 });
