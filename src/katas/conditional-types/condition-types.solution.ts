import type { Equal, Expect } from '@type-challenges/utils'

type DocumentIsAnEpisode = true;
type DocumentIsAProgramme = true;


type If<C extends boolean, T, F> = C extends true ? T : F;

type Tests = [
    Expect<Equal<If<DocumentIsAnEpisode, 'Episode', 'Programme'>, 'Episode'>>,
    Expect<Equal<If<DocumentIsAProgramme, 'Programme', 'Episode'>, 'Programme'>>
]