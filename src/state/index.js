import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        label: "Workout for 20 mins",
        icon: "/assets/workout.svg",
        tickColor: "#9E4CB8",
        ticked: false,
    },
    {
        id: 2,
        label: "Read book for 15 mins",
        icon: "/assets/read.svg",
        tickColor: "#D15439",
        ticked: false,
    },
    {
        id: 3,
        label: "30 mins walk",
        icon: "/assets/walk.svg",
        tickColor: "#81B47D",
        ticked: false,
    },
    {
        id: 4,
        label: "Sleep at 11 sharp",
        icon: "/assets/sleep.svg",
        tickColor: "#63A7A7",
        ticked: false,
    },
    {
        id: 5,
        label: "Drink 3L water",
        icon: "/assets/water.svg",
        tickColor: "#5A92CB",
        ticked: false,
    },
];

const goalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        toggleTick: (state, action) => {
            const goal = state.find((goal) => goal.id === action.payload);
            if (goal) {
                goal.ticked = !goal.ticked;
            }
        },
    },
});

export const { toggleTick } = goalsSlice.actions;
export default goalsSlice.reducer;
