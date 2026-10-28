import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..','dist');
const port=Number(process.env.PORT)||3000;
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.xml':'application/xml','.txt':'text/plain; charset=utf-8','.ico':'image/x-icon'};
const server=http.createServer((req,res)=>{
 if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405);res.end();return;}
 let url;
 try{url=new URL(req.url,'http://localhost');}catch{res.writeHead(400);res.end();return;}
 let filepath;
 try{const decoded=decodeURIComponent(url.pathname); filepath=path.resolve(root,'.'+decoded);if(filepath!==root&&!filepath.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}}catch{res.writeHead(400);res.end();return;}
 try{if(fs.statSync(filepath).isDirectory())filepath=path.join(filepath,'index.html');}catch{}
 if(!fs.existsSync(filepath)){const maybe=filepath+'.html';filepath=fs.existsSync(maybe)?maybe:path.join(root,'404.html');res.statusCode=fs.existsSync(maybe)?200:404;}
 if(!fs.existsSync(filepath)){res.writeHead(404);res.end('Not found');return;}
 res.setHeader('Content-Type',mime[path.extname(filepath)]||'application/octet-stream');
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
 res.setHeader('X-Frame-Options','SAMEORIGIN');
 res.setHeader('Cache-Control',filepath.endsWith('.html')?'no-cache':'public, max-age=3600');
 fs.createReadStream(filepath).pipe(res);
});
server.listen(port,()=>console.log(`FixFlowOS site local: http://localhost:${port}`));
