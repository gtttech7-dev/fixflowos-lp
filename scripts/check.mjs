import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dir=path.join(root,'dist');
const files=[];function walk(d){for(const name of fs.readdirSync(d)){const p=path.join(d,name);if(fs.statSync(p).isDirectory())walk(p);else files.push(p);}}walk(dir);
const html=files.filter(f=>f.endsWith('.html'));
if(html.length<20)throw new Error('Páginas HTML insuficientes.');
for (const f of html){const s=fs.readFileSync(f,'utf8');for(const fragment of ['<html lang="pt-BR">','<title>','<meta name="description"','<h1','<main id="main"','<footer'])if(!s.includes(fragment))throw new Error(`${f} faltou ${fragment}`);
 const h1=(s.match(/<h1(?:\s|>)/g)||[]).length;if(h1!==1)throw new Error(`${f} precisa conter um h1, contém ${h1}`);
 if(s.includes('https://buy.stripe.com/COLE_'))throw new Error(`${f} contém checkout falso`);
}
const sitemap=fs.readFileSync(path.join(dir,'sitemap.xml'),'utf8');if(!sitemap.includes('<urlset'))throw new Error('Sitemap malformado.');
const obj=JSON.parse(fs.readFileSync(path.join(root,'config','site.json'),'utf8'));
if(obj.siteUrl && sitemap.includes('<urlset>\n</urlset>'))throw new Error('Sitemap sem URLs com domínio definido.');
const assets=['styles.css','site.js','images/dashboard.webp','images/kanban.webp','images/aparelhos.webp'];for(const a of assets)if(!fs.existsSync(path.join(dir,a)))throw new Error(`Asset ausente: ${a}`);
console.log(`Verificação estática: ${html.length} páginas HTML, metadados, H1, assets, sitemap e configuração OK.`);

// Regression V2: links informados, removida seção de vídeo e comparativo identificado como ilustrativo.
const main=fs.readFileSync(path.join(dir,'index.html'),'utf8');
const planHtml=fs.readFileSync(path.join(dir,'planos','index.html'),'utf8');
const contactHtml=fs.readFileSync(path.join(dir,'contato','index.html'),'utf8');
const payment=JSON.parse(fs.readFileSync(path.join(root,'config','links.json'),'utf8'));
const contact=JSON.parse(fs.readFileSync(path.join(root,'config','site.json'),'utf8'));
for(const [id,url] of Object.entries(payment.stripe)){if(!url)continue;for(const [name,page] of [['home',main],['planos',planHtml]])if(!page.includes(url))throw new Error(`${name} sem checkout ${id}`)}
for(const text of ['Parcelar vitalício por Pix','Consultar Pix trimestral ou anual','COMPARATIVO DE MERCADO','Não é pesquisa de satisfação'])if(!main.includes(text))throw new Error(`home perdeu informação essencial: ${text}`);
for(const text of ['Parcelar vitalício por Pix','Consultar Pix trimestral ou anual'])if(!planHtml.includes(text))throw new Error(`planos perdeu informação: ${text}`);
if(main.includes('id="demonstracao"')||main.includes('video-frame'))throw new Error('home ainda contém seção de vídeo');
if(!main.includes(contact.accessUrl))throw new Error('home sem link de acesso ao sistema');
if(!contactHtml.includes('wa.me/5564992941121'))throw new Error('WhatsApp não corresponde ao número informado');
if(Object.values(payment.stripe).some(v=>v.includes('/test_')) && (!main.includes('Checkout em modo de teste')||!planHtml.includes('Checkout em modo de teste')))throw new Error('links Stripe em modo de teste sem aviso visível');
console.log('Regressão V2: checkouts, WhatsApp, acesso, Pix, comparação ilustrativa, retirada do vídeo e avisos de teste OK.');
