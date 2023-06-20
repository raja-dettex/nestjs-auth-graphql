import { Test } from "@nestjs/testing";
import { UserResolver } from "./user.resolver"
import { UserService } from "./users.service";

describe("user resovler",() => {
    let userResolver: UserResolver;

    let users = [ 
        {userId: "123", email: "raja@hello", password: "mypass", age: 23}
    ];

    let userServiceMocked = {
        createUser: jest.fn(),
        getAllUsers: jest.fn().mockImplementation(()=> users),
        getUserById: jest.fn().mockImplementation(()=> users[0]),
        getUserByEmail: jest.fn(),
        updateUserDetails: jest.fn()
    }

    beforeEach(async ()=> {
        const moduleRef = await Test.createTestingModule({
            providers: [
                UserResolver,
                {
                    provide: UserService,
                    useValue: userServiceMocked
                }
            ]
        }).compile();

        userResolver = moduleRef.get<UserResolver>(UserResolver);
    });

    it("user resolver is defined", async ()=> {
        expect(userResolver).toBeDefined();
    })

    it("returns a list of users", async () => {
        expect(await userResolver.getAllUsers()).toBe(users);
    })
    it("returns a single user object", async () => {
        expect(await userResolver.getUserrById({userId: "123"})).toBe(users[0]);
    })
})