import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';
import { User } from '@prisma/client';


const app = new Hono<{
  Bindings : {
    DATABASE_URL : string
  }
}>()


// app.use('*', clerkMiddleware())

app.get('/', (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const auth = getAuth(c)

  if (!auth?.userId) {
    return c.json({
      message: 'You are not logged in.'
    })
  }

  return c.json({
    message: 'You are logged in!',
    userId: auth.userId
  })
})


app.post("/api/v1/user/signup", (c)=>{
  return c.text("hello")
})


app.get("/api/v1/user/getPosts", (c)=>{
  return c.text("hello")
})


app.post("/api/v1/user/createPost", (c)=>{
  return c.text("hello")
})

 
app.put("/api/v1/user/addToCart", (c)=>{
  return c.text("hello")
})



export default app
