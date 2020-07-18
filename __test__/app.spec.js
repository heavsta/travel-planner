import { saveTrip } from "../src/client/js/app";

describe('Tests saveTrip', () => {
    test('Checks if saveTrip is a function', async () => {
      expect(typeof saveTrip).toBe("function");
    });
    test('Checks if saveTrip function is defined', () => {
        expect(saveTrip).toBeDefined();
    });
});