import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, fetchCount } from './counterSlice';
import type { RootState, AppDispatch } from '../../app/store';
interface CounterProps {
    initial?: number;
    step?: number;
    min?: number;
    max?: number;
    onChange?: (value: number) => void;
}

export default function Counter({
    initial = 0,
    step = 1,
    min = -Infinity,
    max = Infinity,
    onChange,
}: CounterProps) {
    const value = useSelector((state: RootState) => state.counter.value);
    const { status } = useSelector((state: RootState) => state.counter);

    const dispatch = useDispatch<AppDispatch>();
    const [count, setCount] = useState<number>(initial);

    const setAndNotify = (value: number) => {
        setCount(value);
        onChange?.(value);
    };

    const incrementClick = () => {
        const next = Math.min(max, count + step);
        setAndNotify(next);
    };

    const decrementClick = () => {
        const next = Math.max(min, count - step);
        setAndNotify(next);
    };

    return (
        <div
            role="group"
            aria-label="Counter"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
        >
            <button
                type="button"
                onClick={decrementClick}
                aria-label="Decrement"
                disabled={count - step < min}
            >
                −
            </button>

            <div
                aria-live="polite"
                style={{ minWidth: 48, textAlign: 'center' }}
            >
                {count}
            </div>

            <button
                type="button"
                onClick={incrementClick}
                aria-label="Increment"
                disabled={count + step > max}
            >
                +
            </button>
            <br />
            <br />
            <hr />
            <p>Redux Counter Value: {value}</p>
            <button type="button" onClick={() => dispatch(decrement())}>
                Decrement Redux Counter
            </button>
            <button type="button" onClick={() => dispatch(increment())}>
                Increment Redux Counter
            </button>

            <br />

            <button
                onClick={() => dispatch(fetchCount(2))}
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'Loading...' : 'Fetch Count'}
            </button>
        </div>
    );
}
