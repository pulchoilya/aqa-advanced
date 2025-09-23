import axios from "axios";
import fs from "fs/promises";
import path from "path";

// path to the env.json file next to this test
const jsonFile = path.join(process.cwd(), "API-testing", "env.json");

test("User can login successfully", async () => {

  const jsonData = JSON.parse(await fs.readFile(jsonFile, "utf-8"));

  const response = await axios.post(`${jsonData.baseUrl}/user/login`, {
    email: "salman@roadtocareer.net",
    password: "1234"
  }, {
    headers: { "Content-Type": "application/json" }
  });

  console.log(response.data);
  expect(response.data.message).toContain("Login successful");

  // save the token back to the file
  jsonData.token = response.data.token;
  await fs.writeFile(jsonFile, JSON.stringify(jsonData, null, 2));
});






test("Admin can get user list", async () => {
  const jsonData = JSON.parse(await fs.readFile(jsonFile, "utf-8"));

  await axios.get(`${jsonData.baseUrl}/user/list`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jsonData.token}` 
    }
    
  }).then(response => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);

      expect(response.data.message).toContain("User list")
    });
  });


test("Get all book list", async () => {
  const response = await axios.get("https://demoqa.com/bookstore/v1/books", {
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });

  console.log(response.data);

  expect(response.status).toBe(200); 
});


test("User can login successfully", async () => {
  const response = await axios.post(
    "http://dmoney.roadtocareer.net/user/login",
    {
      email: "salman@roadtocareer.net",
      password: "1234"
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  console.log(response.data);
  expect(response.data.message).toContain("Login successful");
});