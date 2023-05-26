import type { Alike, Debug, Equal, Expect } from '@type-challenges/utils'
import { Has } from '../../utils';

type ZeroToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
type OneToNine = Exclude<ZeroToNine, 0>;
type TwoToNine = Exclude<ZeroToNine, 0 | 1>;

type YYYY = `20${TwoToNine}${ZeroToNine}`;
type MM = `0${OneToNine}` | `1${0 | 1 | 2}`;
type DD = `${0}${OneToNine}` | `${1 | 2}${ZeroToNine}` | `3${0 | 1}`;


type IsoDate = `${YYYY}-${MM}-${DD}`;


type Tests = [
    Expect<Equal<Has<IsoDate, '2020-01-04'>, true>>,
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