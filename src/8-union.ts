/**
 * Union type (|)
 */

// type NoobDeveloper = {
//     name: string
// }
// type JuniorDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number
// }

// const newDeveloper: NoobDeveloper | JuniorDeveloper = {
//     name: "Razu Molla",
//     expertise: 'JS',
//     experience:6
// }

/**
 * Intersection type (&)
 * never type(enum)
 */

type NoobDeveloper = {
    name: string
}
type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number
}

// not used enum type
enum Level{
    junior="junior",
    mid='mid',
    senior= 'senior'
}
type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number,
    level: Level
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Razu Molla",
    expertise: 'JS',
    experience:6
}

const developer: NextLevelDeveloper = {
    name: 'Next Ostad',
    expertise: "typescript",
    experience: 2,
    leadershipExperience: 1,
    level: Level.junior
}


