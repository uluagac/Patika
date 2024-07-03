const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    if(ctx.path === "/") {
        ctx.response.type = "html"
        ctx.body = "<h1>Giris Sayfasina Hoş Geldiniz!</h1>"
    } else {
        await next();
    }
});
app.use(async (ctx, next) => {
    if(ctx.path === "/about") {
        ctx.response.type = "html"
        ctx.body = "<h1>Hakkimda Sayfasina Hoş Geldiniz!</h1>"
    } else {
        await next();
    }
});
app.use(async (ctx, next) => {
    if(ctx.path === "/contact") {
        ctx.response.type = "html"
        ctx.body = "<h1>Iletisim Sayfasina Hoş Geldiniz!</h1>"
    } else {
        await next();
    }
});

app.listen(3000);