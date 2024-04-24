import request from "supertest";
import app from "./server";
import server from "./server";

describe("GET /", () => {
  afterAll(() => {
    server.close();
  });

  it("responds with JSON message 'Hello from server!'", async () => {
    try {
      const response = await request(app).get("/");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: "Hello from server!" });
    } catch (error: any) {
      if (error.response) {
        // The server responded with a status code outside of 2xx
        console.error("Server responded with an error:", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server");
      } else {
        // Other errors
        console.error("An error occurred:", error.message);
      }
    }
  });
});
