const bind_port = 8000
const listener = Deno.listen( {port: bind_port } )

console.log('The server is now listening on 0.0.0.0:' + bind_port)

for await (const con: Deno.Conn of listener) {
  serveHttp(con)
}

async function serveHttp(con: Deno.Conn) {
  const httpcon = Deno.serveHttp(con)
  for await (const reqevent of httpcon) {
    const req = reqevent.request

    const host = String(req.headers.get('host'))
    let resp: Response;
    if(host === '') {
      resp = new Response(null, {status: 400})
      return
    }

    if(host === 'localhost:' + bind_port) {
      resp = new Response('Hello from proxy server', {status: 200})
    }
    else {
      try {
        resp = await fetch(req.url)
      }
      catch(_err) {
        continue
      }
    }

    if(resp != null)
    {
      console.log("Url: " + resp.url)
    }
    reqevent.respondWith(resp)
  }
}