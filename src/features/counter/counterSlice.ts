import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: CounterState = {
    value: 0,
    status: 'idle',
};
export const fetchCount = createAsyncThunk<number, number>(
    'counter/fetchCount',
    async (amount = 1) => {
        const response = await new Promise<{ data: number }>((resolve) => {
            setTimeout(() => resolve({ data: amount }), 500);
        });
        return response.data;
    }
);
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCount.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCount.fulfilled, (state, action) => {
                state.value = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchCount.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
