import { z } from "zod";

const Schema = z.object({
  id: z.number(),
  created: z.date(),
  title: z.string().min(1).max(100),
  brand: z.string().min(1).max(30),
  description: z.string().min(1).max(500),
  price: z.number().min(1).max(10000),
  discount: z.number().min(1).max(100).nullable(),
  quantity: z.number().min(0).max(10),
  tags: z.array(z.string().min(1).max(30)),
  images: z.array(
    z.object({
      id: z.number(),
      created: z.date(),
      title: z.string().min(1).max(100),
      type: z.enum(["jpg", "png"]),
      url: z.string().url(),
    })
  ),
  ratings: z.array(
    z.object({
      id: z.number(),
      stars: z.number().min(0).max(5),
      title: z.string().min(1).max(100),
      text: z.string().min(1).max(1000),
      images: z.array(
        z.object({
          id: z.number(),
          created: z.date(),
          title: z.string().min(1).max(100),
          type: z.enum(["jpg", "png"]),
          url: z.string().url(),
        })
      ),
    })
  ),
});

Schema.parse({});
