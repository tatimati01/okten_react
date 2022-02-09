import {createSlice} from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState: {
        tasks: [],
        countNew: 0,
        countDone: 0
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({id: new Date().getTime(), value: action.payload.task, status: false})
            state.countNew = state.countNew + 1
        },
        deleteTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id)
            if (state.tasks[index].status) {
                state.countDone = state.countDone - 1
                state.countNew = state.countNew - 1
            } else {
                state.countNew = state.countNew - 1
            }
            state.tasks.splice(index, 1)
        },
        completeTheTask: (state, action) => {
            const completedTask = state.tasks.find(task => task.id === action.payload.id);
            completedTask.status = !completedTask.status
            if (completedTask.status) {
                state.countDone = state.countDone + 1
            } else {
                state.countDone = state.countDone -1
            }
        }
    }
});

export const {addTask, deleteTask, completeTheTask} = taskSlice.actions;

const taskReducer = taskSlice.reducer;
export default taskReducer