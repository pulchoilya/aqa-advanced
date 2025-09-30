import axios from "axios";
import { getUserProfileFake } from "./session.js";

jest.mock("axios");
describe("/users/profile mocked tests", () => {
  test("returns user profile data if authenticated", async () => {
    const fakeResponse = {
      status: 200,
      data: {
        status: "ok",
        data: {
          userId: 1,
          photoFilename: "default-user.png",
          name: "John",
          lastName: "Dou"
        }
      }
    };

    // create mok 
    axios.get.mockResolvedValue(fakeResponse);

    const result = await getUserProfileFake();

    expect(result).toEqual(fakeResponse.data);
    expect(result.data).toHaveProperty("userId", 1);
    expect(result.data).toHaveProperty("name", "John");
    expect(result.data).toHaveProperty("lastName", "Dou");
    
    expect(axios.get).toHaveBeenCalledWith(
      "https://qauto.forstudy.space/api/users/profile",
      expect.objectContaining({
        headers: expect.objectContaining({
          "Content-Type": "application/json",
          Cookie: "sid=FAKE_SID"
        }),
        withCredentials: true
      })
    );
  });

  test("returns 'Not authenticated' if user is not logged in", async () => {
    const fakeResponse = {
      status: 200,
      data: {
        status: "ok",
        message: "Not authenticated"
      }
    };
    
    // create mok 
    axios.get.mockResolvedValue(fakeResponse);

    const result = await getUserProfileFake();

    expect(result).toEqual(fakeResponse.data);
    expect(result).toHaveProperty("message", "Not authenticated");
  });
});