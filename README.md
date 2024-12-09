# Artilibre web

This project is built with nextjs 15 and uses npm.
For now, as nextjs 15 is not released, every library is installed with `npm install --legacy-peer-deps`.

## Deploy 🏗️

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

For now, it exists 3 environments :

-   dev :
-   staging :
-   prod : https://artilibre.fr

### Deploy with docker

Please set your [.env](.env) file. Then the project ha sben dockerized so you can easily run it with

```bash
docker compose up
```

## Quality inspection

[![Quality Gate Status](https://sonar.neodigit.fr/api/project_badges/measure?project=Artilibre_artilibre-web_3cd42cab-8047-4517-aa88-57435907bc84&metric=alert_status&token=sqb_9e9e7a48ba5003263e81b59f1643be5285cdd1cf)](https://sonar.neodigit.fr/dashboard?id=Artilibre_artilibre-web_3cd42cab-8047-4517-aa88-57435907bc84)
