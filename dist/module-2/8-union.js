"use strict";
/**
 * Union type (|)
 */
// not used enum type
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = "senior";
})(Level || (Level = {}));
const newDeveloper = {
    name: "Razu Molla",
    expertise: 'JS',
    experience: 6
};
const developer = {
    name: 'Next Ostad',
    expertise: "typescript",
    experience: 2,
    leadershipExperience: 1,
    level: Level.junior
};
