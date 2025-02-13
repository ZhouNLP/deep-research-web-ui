# Deep Research Web UI

This is a web UI for https://github.com/dzhng/deep-research.

Features:

- Stream AI responses for realtime feedback
- Viasualization of the research process using a tree structure
- Export research report as PDF
- Bring Your Own API Key: Everything (config, API requests, ...) happens in your browser

Currently available providers:
- AI: OpenAI compatible
- Web Search: Tavily (similar to Firecrawl, but with more free quota (1000 credits / month))

Please give a 🌟 Star if you like this project!

<video src="https://github.com/user-attachments/assets/2f5a6f9c-18d1-4d40-9822-2de260d55dab" controls></video>

## How to use

Live demo: <a href="https://deep-research.ataw.top" target="_blank">https://deep-research.ataw.top</a>

### Self hosted

Use pre-built Docker image:
```bash
docker run -p 3000:3000 --name deep-research-web -d anotia/deep-research-web:latest
```

Use self-built Docker image:
```
git clone https://github.com/AnotiaWang/deep-research-web-ui
cd deep-research-web-ui
docker build -t deep-research-web .
docker run -p 3000:3000 --name deep-research-web -d deep-research-web
```

---

## Developing

### Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

If you want to deploy a SSR application:
```bash
pnpm build
```

If you want to deploy a static, SSG application:
```bash
pnpm generate
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## License

MIT
