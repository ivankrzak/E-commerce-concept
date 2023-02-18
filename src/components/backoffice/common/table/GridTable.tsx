import * as React from 'react'
import {
  BoxProps,
  Flex,
  Grid,
  GridItem,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react'

export interface ColumnProps<TData> {
  header: string | (() => React.ReactNode)
  onHeaderClick?: () => void
  cell: (rowData: TData) => React.ReactNode
  label?: string
  subLabel?: string
  columnStyles?: BoxProps
}

interface DefaultDataProps {
  id: number
}

interface TableProps<TData> {
  isLoading: boolean
  data: TData[]
  columns: ColumnProps<TData>[]
  onRowClick?: (rowData: TData) => void
}

export const GridTable = <TData extends DefaultDataProps>({
  isLoading,
  data,
  columns,
  onRowClick,
}: TableProps<TData>) => (
  <VStack w="full">
    <Skeleton
      w="full"
      minH="72px"
      h="auto"
      startColor="backoffice.wildBlueYonder"
      endColor="backoffice.primary"
      speed={0.5}
      fadeDuration={2}
      isLoaded={!isLoading}
    >
      <VStack w="full" spacing="8px">
        <Grid
          w="full"
          columnGap="24px"
          autoColumns="1fr"
          autoFlow="column"
          px="24px"
        >
          {columns.map(({ header, columnStyles }, index) => (
            <GridItem
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              py="16px"
              {...columnStyles}
            >
              {typeof header === 'string' ? (
                <Text
                  fontFamily="Space Grotesk Medium"
                  fontSize="16px"
                  color="backoffice.deepPurple"
                  _dark={{ color: 'backoffice.wildBlueYonder' }}
                >
                  {header}
                </Text>
              ) : (
                header()
              )}
            </GridItem>
          ))}
        </Grid>
        {data.map((row) => (
          <Grid
            key={row.id}
            w="full"
            columnGap="24px"
            autoColumns="1fr"
            autoFlow="column"
            minH="72px"
            px="24px"
            py="12px"
            borderRadius="8px"
            bg="white"
            color="backoffice.deepPurple"
            _dark={{
              bg: 'backoffice.deepPurple50',
              color: 'backoffice.ghostWhite',
            }}
            {...(onRowClick && {
              onClick: () => onRowClick?.(row),
              _hover: { bg: 'backoffice.primary100' },
            })}
          >
            {columns.map(({ cell, columnStyles }, index) => (
              <GridItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                h="full"
                {...columnStyles}
              >
                <Flex w="full" h="full" align="center">
                  {cell?.(row)}
                </Flex>
              </GridItem>
            ))}
          </Grid>
        ))}
      </VStack>
    </Skeleton>
    {isLoading && (
      <>
        <Skeleton
          startColor="brand.gainsboro"
          endColor="brand.fogGray"
          speed={0.5}
        />
        <Skeleton
          startColor="brand.gainsboro"
          endColor="brand.fogGray"
          speed={0.5}
        />
        <Skeleton
          startColor="brand.gainsboro"
          endColor="brand.fogGray"
          speed={0.5}
        />
        <Skeleton
          startColor="brand.gainsboro"
          endColor="brand.fogGray"
          speed={0.5}
        />
      </>
    )}
  </VStack>
)
