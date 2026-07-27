export const Schema = z.object({
  身体: z.object({
    小穴: z.string().prefault('未描述'),
    后庭: z.string().prefault('未描述'),
    乳房: z.string().prefault('未描述'),
  }).prefault({}),
  穿衣: z.object({
    上身: z.string().prefault('未描述'),
    下身: z.string().prefault('未描述'),
    胸罩: z.string().prefault('未描述'),
    内裤: z.string().prefault('未描述'),
    袜子: z.string().prefault('未描述'),
  }).prefault({}),
  情绪: z.object({
    当前情绪: z.string().prefault('平静'),
  }).prefault({}),
});

export type Schema = z.output<typeof Schema>;
