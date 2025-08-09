import {atom , selector} from "recoil";

export const CountAtom =  atom({
    key: "count",
    default: 0
})

export const  conutSelector  = selector({
    key: "conutSelector",
    get: ({get})=> {
        const count = get(CountAtom)
        return count % 2 == 0;
    }
}) 