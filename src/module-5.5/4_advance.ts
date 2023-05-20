/**
 * npx ts-node-dev --respawn src/module-5.5/4_advance.ts
 */
interface Model<TData,TMethods>{
    data: TData;
    Methods: TMethods;
}

// properties
interface IUser{
    firstName: string;
    lastName: string;
}

// Methods
interface IMethods{
    fullName(): string;
}

type model = Model<IUser, IMethods>;

class User implements model {
    data: IUser;
    Methods: IMethods;
    constructor(firstName:string, lastName:string) {
        this.data = { firstName, lastName };
        this.Methods = {
            fullName: () => ` ${firstName} ${lastName}`
        }
        
    }
}

const user1 = new User("Razu", "Molla");
// console.log(user1.Methods.fullName()); //output: Razu Molla