
'use client'

import { ApolloProvider } from '@apollo/client'
import type {FC, PropsWithChildren} from 'react'

import { client } from '@/libs/apollo-client'

export const ApolloClientProvider:FC =({ children }: PropsWithChildren)=> {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}
