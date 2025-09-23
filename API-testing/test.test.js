import axios from "axios";

axios.interceptors.response.use(response => {
  console.log("RESPONSE:");
  console.log("STATUS:", response.status);
  console.log("STATUS TEXT:", response.statusText);
  console.log("HEADERS:", response.headers);
  console.log("DATA:", response.data);
  return response;
});

let token;

test("User can login successfully", async () => {
    const response = await axios.post(`
https://api.1.2.8.release.app.camporganizer.app/auth/login`,
        {
            "email": "helga@cotest.cc",
            "password": "14ed9911"
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data)
  token = response.data.token || response.data.accessToken;

    expect(response.data.message).toContain("OK")
})


test("GET", async () => {
    const response = await axios.get(`
https://api.1.2.8.release.app.camporganizer.app/assigned-courses/session/68c81c04ebd15cde3b319315?page=1&limit=12`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })
    console.log("COURSES:", response.data);

    expect(response.status).toEqual(200);
})