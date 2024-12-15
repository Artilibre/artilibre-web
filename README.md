# Artilibre web

This project is built with nextjs 15 and uses npm.
For now, as nextjs 15 is not released, every library is installed with `npm install --legacy-peer-deps`.

## Deploy 🏗️

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

For now, it exists 4 environments :

- local : http://localhost:3222 (port depends of your `ARTI_WEB_PUBLISHED_PORT` in [.env](.env))
- dev :
- staging :
- prod : https://artilibre.fr

### Deploy with docker 🐳

Please set your [.env](.env) file. Then the project ha sben dockerized so you can easily run it with

```bash
docker compose up
```

## Quality inspection

[![Quality Gate Status](https://sonar.neodigit.fr/api/project_badges/measure?project=Artilibre_artilibre-web_3cd42cab-8047-4517-aa88-57435907bc84&metric=alert_status&token=sqb_9e9e7a48ba5003263e81b59f1643be5285cdd1cf)](https://sonar.neodigit.fr/dashboard?id=Artilibre_artilibre-web_3cd42cab-8047-4517-aa88-57435907bc84)

## Tips 💡

### Tailwindcss warning 🎨

We use [tailwindcss](https://tailwindcss.com/) so it could be a good idea to use this vscode plugin `Tailwind CSS IntelliSense`. Our vscode configuration is shared with [.vscode/settings.json](.vscode/settings.json). The file association lets us to avoid seeing the vscode error on tailwind directive : unknown at rule @tailwind warning.

You can find more information about it at this address : https://byby.dev/at-rule-tailwind

### Fonts

We use font from Vercel named [Geist](https://vercel.com/font). You can simply use it with tailwindcss by using:

- `font-sans` class name for Geist Sans
- `font-mono` class name for Geist Mono.

### Legacy peer deps 🧬

If you want to import shadcn component, please use the following

```bash
docker exec -it artilibre-web bash
npm_config_legacy_peer_deps=true npx shadcn@latest add sheet
```
