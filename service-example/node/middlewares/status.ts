export async function status(ctx: Context, next: () => Promise<any>) {
  
  const {
    state: { code },
    clients: { OMS },
  } = ctx

    const data = await OMS.order(code.toString(), "ADMIN_TOKEN": )
    ctx.body = data
    
  await next()
}