import type { Equal, Expect } from '@type-challenges/utils'

type DocumentIsAnEpisode = true;
type DocumentIsAProgramme = true;


type If<C extends boolean, V1, V2> = C extends true ? V1 : V2;

type Tests = [
    Expect<Equal<If<DocumentIsAnEpisode, 'Episode', 'Programme'>, 'Episode'>>,
    Expect<Equal<If<DocumentIsAProgramme, 'Programme', 'Episode'>, 'Programme'>>
]