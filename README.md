
# UniTrade

UniTrade is a platform designed specifically for college students to buy, sell, and trade their belongings securely within their campus community. The platform eliminates extra steps and inefficiencies found in typical marketplaces like OLX, while also providing a trusted environment by limiting access to verified students only.


## Tech Stack

**Frontend:** Next.js, Tailwind CSS, Framer Motion

**Authentication:** Clerk

**Database:** PostgreSQL with Prisma ORM

**Language:** TypeScript



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DIRECT_URL`

`DATABASE_URL`

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

`CLERK_SECRET_KEY`

`WEBHOOK_SECRET`

`EDGE_STORE_ACCESS_KEY`

`EDGE_STORE_SECRET_KEY`



## Installation

Install my-project with npm

```bash
    git clone https://github.com/your-username/unitrade.git
    cd unitrade
```

```bash
    npm install
```

Create a .env file in the root of the project and add your PostgreSQL and Clerk keys.

```bash
    npm run dev
```

Open your browser and navigate to http://localhost:port

    