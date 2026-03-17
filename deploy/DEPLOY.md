# AX Website Deployment

This project builds to a static site with `vite build`.

## Option 1: GitHub -> Cloudflare Pages

Recommended for this project.

1. Use `/mnt/b/AX_website/AX-website` as the Git repository root.
2. Initialize Git locally:

```bash
cd /mnt/b/AX_website/AX-website
git init -b main
git config user.name "<YOUR_NAME>"
git config user.email "<YOUR_EMAIL>"
git add .
git commit -m "Initial AX website"
```

3. Create an empty GitHub repository, then connect and push:

```bash
git remote add origin https://github.com/<YOUR_ACCOUNT>/<YOUR_REPO>.git
git push -u origin main
```

4. In Cloudflare Pages:
   - Create a new project with `Workers & Pages -> Create -> Pages -> Connect to Git`
   - Select the GitHub repository
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`

5. For `ax.kaist.ac.kr`, add the custom domain in Cloudflare Pages, then create the DNS record Cloudflare asks for.

Because this app uses a hash router, static hosting on Pages does not need extra rewrite rules for client-side routes.

## Option 2: Public Linux server with Docker

1. Prepare a public server with ports `80` and `443` open.
2. Point DNS for `ax.kaist.ac.kr` to that server's public IP.
3. Copy this project to the server.
4. Build and run:

```bash
docker build -t ax-website .
docker run -d --name ax-website --restart always -p 80:80 ax-website
```

5. Verify:

```bash
curl -I http://127.0.0.1
```

## HTTPS

For production, terminate HTTPS in front of this container.

- Easiest: run behind Caddy or another reverse proxy that manages TLS.
- Alternative: use Nginx on the host with Certbot.

## Option 3: Other static hosting

If you do not want to use Cloudflare Pages, deploy the repo to another static hosting platform such as Vercel, then connect `ax.kaist.ac.kr` by adding the required DNS records from that platform.

## Local network test

For same-network testing only:

```bash
npm run dev -- --host 0.0.0.0 --port 4173
```

Then open the machine IP with port `4173` from another device on the same network.
