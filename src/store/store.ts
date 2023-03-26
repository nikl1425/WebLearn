
import { create } from 'zustand'

import { LayoutSlice, createLayoutSlice } from './layoutSlice'


const useStore = create<LayoutSlice>()((...a) => ({
    ...createLayoutSlice(...a)
}))


export default useStore;