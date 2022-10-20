import React, { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductsProps {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number
}

export const useProducts = ({ onChange, product, value = 0 }: useProductsProps,) => {
    const [counter, setCounter] = useState(value)

    const isControlled = useRef(!!onChange)

    const increaseBy = (value: number) => {
        if (isControlled.current) {
            return onChange!({ count: value, product })
        }
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)
        onChange && onChange({count: newValue, product});
    }

    useEffect(() => {
        setCounter(value)
    }, [value])

    return { counter, increaseBy }
}
