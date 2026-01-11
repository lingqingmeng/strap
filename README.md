# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.


## HOW TO VERIFY
```zsh
curl -H "Authorization: Bearer <redacted> \ "http://localhost:1338/api/home-page?populate=*"
```
Check Signal

Expect output
```json
{
  "data": {
    "id": 2,
    "documentId": "ubejjo3ibueiipj1c427p7qf",
    "title": "Home",
    "description": "This is home",
    "createdAt": "2026-01-11T07:23:36.850Z",
    "updatedAt": "2026-01-11T07:23:36.850Z",
    "publishedAt": "2026-01-11T07:23:36.859Z",
    "blocks": []
  },
  "meta": {}
}
```
