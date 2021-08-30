import { json } from 'co-body'
//import api from './api'
//import axios from 'axios'

export async function status(ctx: Context, next: () => Promise<any>) {
  
  const {
    state: { code },
    clients: { OMS },
  } = ctx
        
    const body = (await json(ctx.req))
    const data = await OMS.order(body.OrderId)

    ctx.status=200
    console.log(body.OrderId)
    console.log(data.clientProfileData.email.split("-",1))
    console.log(data.creationDate)

    
    
  await next()

  //const response = await axios.get('https://iodno295ed.execute-api.us-west-2.amazonaws.com/clientes')
  //console.log(response.data.Items)

}

