import { saveTrip } from "../src/client/js/app";


//Main Function
describe('Test, the function saveTrip should be a function', () => {
    test('It should return true', async () => {
        expect(typeof saveTrip).toBe("function");
    });
});
