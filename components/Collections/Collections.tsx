import React, { FC } from 'react'
import { map, times } from 'ramda'

import { Link } from '../../modules/Link'
import { Eth } from '../../modules/Eth'
import { Percentage } from '../../modules/Percentage'
import { Table, Head as THead, HeaderCell, Row, Cell, Body } from '../../modules/Table'
import { Collection } from '../../common/types'
import { SkeletonLoader } from '../SkeletonLoader'

interface CollectionsProps {
  collections: Collection[]
  isLoading: boolean
}

export const Collections: FC<CollectionsProps> = ({ collections, isLoading }) => (
  <div className="w-full text-black mx-auto py-8 max-w-screen-2xl">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="-mx-4 mt-8 sm:-mx-0">
        <Table>
          <THead>
            <Row>
              <HeaderCell colspan={2}>Collection</HeaderCell>
              <HeaderCell>Volume</HeaderCell>
              <HeaderCell>Floor price</HeaderCell>
              <HeaderCell>Supply</HeaderCell>
              <HeaderCell>
                <span className="sr-only">Edit</span>
              </HeaderCell>
            </Row>
          </THead>
          <Body>
            {map((collection: any) => (
              <Row key={collection.id}>
                <Cell>
                  <img src={collection.image} alt={collection.name} className="h-12 w-12 rounded-full" />
                </Cell>
                <Cell>{collection.name}</Cell>
                <Cell>
                  <span className="font-bold">
                    <Eth amount={collection.volume['1day']} />
                  </span>{' '}
                  <Percentage amount={collection.volumeChange['1day']} />
                </Cell>
                <Cell>
                  <span className="font-bold">
                    <Eth amount={collection.floorSale['1day']} />
                  </span>{' '}
                  <Percentage amount={collection.floorSaleChange['1day']} />
                </Cell>
                <Cell>{collection.tokenCount}</Cell>
                <Cell>
                  <Link href={`/collection/${collection.id}`} title={collection.name}>
                    View &rarr;{' '}
                  </Link>
                </Cell>
              </Row>
            ))(collections || [])}
            {isLoading
              ? times((iterator: number) => (
                  <Row key={iterator}>
                    <Cell>
                      <SkeletonLoader style="light" />
                    </Cell>
                    <Cell>
                      <SkeletonLoader style="light" />
                    </Cell>
                    <Cell>
                      <SkeletonLoader style="light" />
                    </Cell>
                    <Cell>
                      <SkeletonLoader style="light" />
                    </Cell>
                    <Cell>
                      <SkeletonLoader style="light" />
                    </Cell>
                    <Cell>
                      <SkeletonLoader style="light" />
                    </Cell>
                  </Row>
                ))(10)
              : null}
          </Body>
        </Table>
      </div>
    </div>
  </div>
)
