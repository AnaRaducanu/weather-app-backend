import request from "supertest";
import app from "./server";

describe("GET /", () => {
  it("responds with JSON message 'Hello from server!'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello from server!" });
  });
});
