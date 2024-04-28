var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from "supertest";
import app from "./server";
import server from "./server";
describe("GET /", () => {
    afterAll(() => {
        server.close();
    });
    it("responds with JSON message 'Hello from server!'", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request(app).get("/");
            expect(response.status).toBe(200);
            expect(response.body).toEqual({ message: "Hello from server!" });
        }
        catch (error) {
            if (error.response) {
                console.error("Server responded with an error:", error.response.status);
            }
            else if (error.request) {
                console.error("No response received from the server");
            }
            else {
                console.error("An error occurred:", error.message);
            }
        }
    }));
});
