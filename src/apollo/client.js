import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://subgraph.unisave.exchange/heco/uniscam/swap',
    // uri: 'http://202.182.118.60:8000/subgraphs/name/uniscam/swapsubgraph2',  // 2是 uniscam
    uri: 'http://202.182.118.60:8000/subgraphs/name/uniscam/swapsubgraph3',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://202.182.118.60:8030/graphql',
    // uri: 'https://subgraph.unisave.exchange/heco/index/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://subgraph.unisave.exchange/heco/blocks',
    // uri: 'https://graph.mdex.com/subgraphs/name/mdex-heco-blocks',
    // uri: 'http://202.182.118.60:8000/subgraphs/name/heco-blocks2',
  }),
  cache: new InMemoryCache(),
})
