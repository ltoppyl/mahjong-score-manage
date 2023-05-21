## FrontEnd

TypeScript + React (Next.js) を使用している
実行方法

```bash
cd frontend
yarn install (初回のみ)
yarn dev
```

上記を実行すると、http://localhost:3000 にサーバが立ち上がる
本番環境は Vercel でデプロイしている -> https://mahjong-score-manage.vercel.app/

Storybook の実行

```bash
cd frontend
yarn storybook
```

## Backend

FastAPI を採用している

実行方法

```bash
cd backend
uvicorn main:app --reload
```

上記を実行すると、http://127.0.0.1:8000 にサーバが立ち上がる

API のエンドポイントとしてのデプロイは [Deta Space](https://deta.space/) で行っている
https://mahjongbe-1-j0155660.deta.app
