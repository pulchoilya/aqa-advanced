import axios from "axios";
import { setSid, getSid, wrongUrlRequest, getCarModels} from "./session.js";

test("Login and get sid cookie", async () => {
  const response = await axios.post(
    "https://qauto.forstudy.space/api/auth/signin",
    {
      email: "ilyaQa@gmail.com",
      password: "Ilya-2024",
      remember: false
    },
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true, 
    }
  );


  const setCookie = response.headers["set-cookie"];
  const sidLine = setCookie.find(c => c.startsWith("sid="));
  setSid(sidLine.split(";")[0]); 

  console.log("Stored SID:", getSid()); 
  expect(response.status).toBe(200);
});



test("Gets authenticated user data", async () => {
  const sid = getSid(); 

  const response = await axios.get(
    "https://qauto.forstudy.space/api/users/current",
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: sid,
      },
    }
  );

  console.log("Profile response.data:", response.data);

  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty("status", "ok");
  expect(response.data).toHaveProperty("data");

  expect(response.data.data).toHaveProperty("userId"); 
  expect(response.data.data).toHaveProperty("distanceUnits", "km");
  expect(response.data.data).toHaveProperty("currency", "usd");
  expect(response.data.data).toHaveProperty("photoFilename", "default-user.png");
});

//  --- TASK 1 ---
test("Request with wrong URL returns error object", async () => {
  const result = await wrongUrlRequest();

  console.log("Error result in test:", result);

  expect(result).toHaveProperty("error", true);
  expect(result).toHaveProperty("status", 404);
  expect(result).toHaveProperty("message");
});


//  --- TASK 2 ---
test("Gets car models with custom headers and query params", async () => {
  const data = await getCarModels(1); 

  console.log("Full response:", data);

  expect(data).toHaveProperty("status", "ok");
  expect(data).toHaveProperty("data");

  console.log("Type of data.data:", Array.isArray(data.data));
  expect(Array.isArray(data.data)).toBe(true);

  if (data.data.length > 0) {
    const car = data.data[0];
    console.log("First car object:", car);

    expect(car).toHaveProperty("id");
    expect(car).toHaveProperty("carBrandId");
    expect(car).toHaveProperty("title");
  } else {
    console.log("No car models returned for this brandId.");
  }
});



