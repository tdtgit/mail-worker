# mail-worker

`mail-worker` is a Cloudflare Worker that sends emails using AWS SES.

## Deploy

Deploy to Cloudflare Workers with the following.

```bash
yarn deploy
```

## Development

Populate your environment variables.

```bash
echo AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY_ID >> .env
echo AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_ACCESS_KEY >> .env
```

Start the server.

```bash
yarn dev
```
