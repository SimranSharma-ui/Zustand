import { create } from "zustand";

const useStore = create((set)=>({
    count:0,
    items:[],
    increament :()=> set((state)=>({count:state.count+100})),
    decreament:()=> set((state)=>({count:state.count-100})),
    additems:(data)=> set((state)=> ({items:[...state.items,data]})),
    removeitems:()=>set((state)=>({items:[]})),
}))

export default useStore;