const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World, This first Koa website';
});

app.listen(3000);
