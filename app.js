const Koa = require("koa");

const bodyParser = require("koa-bodyparser");
const Router = require("@koa/router");
const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.context.test = "hello";
app.context.testFunction = () => "hello";

app.use(async (ctx, next) => {
    try {
        console.log("hello koa - start");
        await next();
        console.log("koa - fin");
    } catch (error) {
        //에러 핸들링
        ctx.status = 500;
        ctx.body = error;
    }
});

router.use("/api/v1", require("@routes/v1").routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

/**
 * @typedef {Object} v
 * @property {number} l
 *
 * @param {v} v
 * @param {import('./app.d.ts').MyType} p
 */
const checkJsExample = (v, p) => {
    console.log(v.l.length);
    console.log(p.asdf);
};
