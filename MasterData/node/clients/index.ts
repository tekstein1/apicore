//node/Clients/index.ts
import { IOClients } from '@vtex/api'
import { Catalog } from '@vtex/clients'
import { OMS } from '@vtex/clients'
import { ID } from '@vtex/api'

import Status from './status'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }

  public get id() {
    return this.getOrSet('id', ID)
  }

public get OMS() {
  return this.getOrSet('oms', OMS)
}

}
