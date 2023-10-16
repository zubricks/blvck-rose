'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { useCart } from '../../_providers/Cart'
import { Cart } from '../icons/Cart'

import classes from './index.module.scss'

export const CartLink: React.FC<{
  className?: string
}> = props => {
  const { className } = props
  const { cart } = useCart()
  const [length, setLength] = useState<number>()

  useEffect(() => {
    setLength(cart?.items?.length || 0)
  }, [cart])

  return (
    <Link className={[classes.cartLink, className].filter(Boolean).join(' ')} href="/cart">
      <Fragment>
        <Cart />
        {typeof length === 'number' && length > 0 && (
          <div className={classes.counter}>
            <small className={classes.quantity}>{length}</small>
          </div>
        )}
      </Fragment>
    </Link>
  )
}
