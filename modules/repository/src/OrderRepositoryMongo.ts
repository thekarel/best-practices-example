import {Order} from '@cupcake/domain'
import {OrderRepository} from '@cupcake/services'
import {Collection, MongoClient} from 'mongodb'

export class OrderRepositoryMongo implements OrderRepository {
  client: MongoClient
  dbName = 'cupcakes'
  collectionName = 'cupcakes'
  collection?: Collection<Order>

  constructor(private readonly url: string) {
    this.client = new MongoClient(this.url, {useUnifiedTopology: true})
  }

  async connect() {
    await this.client.connect()

    this.collection = this.client.db(this.dbName).collection<Order>(this.collectionName)
  }

  async save(order: Order) {
    if (!this.collection) {
      throw new Error('Connect first')
    }

    await this.collection.insert(order)
  }

  async load(id: string) {
    if (!this.collection) {
      throw new Error('Connect first')
    }

    const item = await this.collection?.findOne({id})

    return item ? item : undefined
  }

  async all() {
    if (!this.collection) {
      throw new Error('Connect first')
    }

    return this.collection.find().toArray()
  }
}
