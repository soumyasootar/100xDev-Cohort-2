import { selector } from "recoil"
import { countAtom } from "../Atoms/Count"


const evenSelector = selector({
    key: "evenSelector",
    get: ({ get }) => {
        const count = get(countAtom)
        return count % 2;
    }
})

export default evenSelector