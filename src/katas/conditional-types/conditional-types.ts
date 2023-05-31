import type { Equal, Expect } from '@type-challenges/utils'

type DocumentIsAnEpisode = true;
type DocumentIsAProgramme = true;

// Your implementation
type If<C extends boolean, V1, V2> = ``

type Tests = [
    Expect<Equal<If<DocumentIsAnEpisode, 'Episode', 'Programme'>, 'Episode'>>,
    Expect<Equal<If<DocumentIsAProgramme, 'Programme', 'Episode'>, 'Programme'>>
]