export async function onRequest(context) {
  const { env, params } = context;

  // El nombre del archivo viene de la URL, ejemplo: /videos/demo.mp4
  const object = await env.VIDEOS_BUCKET.get(params.filename);

  if (!object) {
    return new Response("Archivo no encontrado", { status: 404 });
  }

  return new Response(object.body, {
    headers: {
      "Content-Type": object.httpMetadata?.contentType || "video/mp4",
      "Cache-Control": "public, max-age=3600" // cache en Cloudflare 1 hora
    }
  });
}
