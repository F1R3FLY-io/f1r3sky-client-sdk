const { http } = require( "msw");
const { setupServer } = require ("msw/node");
const {OpenAPIBackend} = require( "openapi-backend");
const definition = require( "./embers-api-schema.json");

// create our mock backend with openapi-backend
const api = new OpenAPIBackend({ definition });
api.register("notFound", (c, res, ctx) => res(ctx.status(404)));
api.register("notImplemented", async (c, res, ctx) => {
  const { status, mock } = api.mockResponseForOperation(
    c.operation.operationId
  );
  ctx.status(status);
  return res(ctx.json(mock));
});

// tell msw to intercept all requests to api/* with our mock
const server = setupServer(
  http.all("*", async (req, res, ctx) =>
    api.handleRequest(
      {
        path: req.url.pathname,
        query: req.url.search,
        method: req.method,
        body: req._bodyUsed ? await req.json() : null,
        headers: { ...req.headers.raw },
      },
      res,
      ctx
    )
  )
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())