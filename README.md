# HTTP Intercept
An HTTP proxy server written in typescript to experiment with intercepting insecure http connections.
The program does not support https connections (yet), but will probably support them in the future.

## How-to-use
### Running / building the server
1) Running
  ```
  # Starting the server
  $ deno run --allow-net main.ts

  # In development mode, it is easier to run main.ts
  # using the --watch flag as it auto-reruns the enitre program on file modification
  $ deno run --watch --allow-net main.ts
  ```
2) Building (unstable as of **deno 1.33.4 (release, x86_64-pc-windows-msvc)**)
  ```
  deno compile --allow-net main.ts
  ```
  
### Intercepting traffic
On a client computer / application, set the http proxy to device's local ip (if on a network) or `localhost` (if the server runs on the client).
