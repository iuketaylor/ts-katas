import { Expect, Equal } from "@type-challenges/utils"
import { Has } from "../../utils/index"


// Your implementation
type IsoDate = ``

type Tests = [
    Expect<Equal<Has<IsoDate, '2024-01-04'>, true>>,
    Expect<Equal<Has<IsoDate, '2099-11-29'>, true>>,
    Expect<Equal<Has<IsoDate, '2053-02-17'>, true>>,
    Expect<Equal<Has<IsoDate, '2075-09-15'>, true>>,
    Expect<Equal<Has<IsoDate, '2045-04-31'>, true>>,

    Expect<Equal<Has<IsoDate, '01-01-2025'>, false>>,
    Expect<Equal<Has<IsoDate, '3001-05-12'>, false>>,
    Expect<Equal<Has<IsoDate, '2038-15-91'>, false>>,
    Expect<Equal<Has<IsoDate, '1994-05-12'>, false>>,
    Expect<Equal<Has<IsoDate, '02-50-2004'>, false>>
]