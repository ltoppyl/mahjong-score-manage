## FrontEnd

TypeScript + React (Next.js) を使用している
実行方法

```bash
cd frontend
yarn install (初回のみ)
yarn dev
```

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

上記を実行すると、http://127.0.0.1:8000/ にサーバが立ち上がる

API のエンドポイントとしてのデプロイは [Deta Space](https://deta.space/) で行っている
https://mahjongscorebe-1-z5531391.deta.app/
