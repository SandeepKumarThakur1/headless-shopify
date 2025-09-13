# 🛒 Headless Shopify Storefront with Next.js (App Router)

This project is a **headless Shopify storefront** built using **Next.js (App Router)**.  
It connects to the **Shopify Storefront GraphQL API** to fetch products, display product details, and handle checkout with Shopify.

---

## 🚀 Features
- Shopify **product listing & detail pages**
- **Headless checkout** (redirects to Shopify’s hosted checkout)
- Example **GraphQL helper** for fetching products
- **Next.js App Router** structure
- Ready for deployment on **Vercel**

---

## 📦 Prerequisites
- Shopify store with **Admin access**
- Node.js + npm/yarn
- Storefront API access token

---

## 🔑 Environment Variables
Create a `.env.local` file in your project root:

```bash
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
SHOPIFY_API_VERSION=2023-10
```

## 📂 Project Structure (simplified)

```bash
src/
  lib/
    shopify.js
  app/
    api/
      create-checkout/route.js
    products/
      [handle]/page.jsx
    layout.jsx
  components/
    layouts/
      homeLayout/HomeLayout.jsx
    ProductClient.jsx
```


## 🛠 Setup
- Install dependencies
``npm install``


- Run locally
``npm run dev``

## Shopify GraphQL Helper
``src/lib/shopify.js``

```bash
const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const apiVersion = process.env.SHOPIFY_API_VERSION || "2023-10";

export async function shopifyFetch(query, variables = {}) {
  const res = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

export async function getAllProducts() { ... }
export async function getProductByHandle(handle) { ... }

```

## Product Page
`` src/app/products/[handle]/page.jsx ``

```bash
import { getProductByHandle } from "@/lib/shopify";
import ProductClient from "@/components/ProductClient";

export default async function ProductPage({ params }) {
  const product = await getProductByHandle(params.handle);
  if (!product) return <div>Product not found</div>;

  return (
    <main>
      <h1>{product.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      <ProductClient product={product} />
    </main>
  );
}
```

## Checkout API

``src/app/api/create-checkout/route.js``

```bash
import { shopifyFetch } from "@/lib/shopify";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const lineItems = body.lineItems || [];

  const mutation = `mutation checkoutCreate($input: CheckoutCreateInput!){
    checkoutCreate(input:$input){
      checkout { id webUrl }
      userErrors { field message }
    }
  }`;

  const variables = { input: { lineItems } };
  const data = await shopifyFetch(mutation, variables);
  return NextResponse.json(data.checkoutCreate);
}
```

### 401 / Unauthorized
 Make sure you’re using the Storefront API token, not the Admin API token.

### Product not found
Ensure product is published to Online Store channel in Shopify.

### Checkout mutation errors

Use the variantId from GraphQL (gid://shopify/ProductVariant/…).

### 🌍 Deployment

- Deploy to Vercel:
- Push your repo to GitHub.
- Import into Vercel.
- Add env vars in Vercel Project Settings → Environment Variables.

### ✅ Roadmap

-  Add cart state with Context API
-  Add checkoutLineItemsAdd mutation for persistent cart
-  Pagination & product filtering
-  SEO & metadata

### 📖 Resources

- Shopify Storefront API
- Next.js App Router

## 👨‍💻 Author
Sandeep Kumar - Frontend Development