export async function onRequest(context) {
  const { env, params } = context;
  
  // El nombre del archivo viene de la URL: /api/video00.mp4
  const filename = params.filename;
  
  // Obtener el video del bucket R2 "ads"
  const object = await env.ADS_BUCKET.get(filename);

  if (!object) {
    return new Response(`Video ${filename} no encontrado`, { status: 404 });
  }

  return new Response(object.body, {
    headers: {
      "Content-Type": "video/mp4",
      "Cache-Control": "public, max-age=86400", // 1 día
      "Accept-Ranges": "bytes"
    }
  });
}
