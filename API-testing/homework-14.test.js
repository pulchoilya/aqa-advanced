import axios from "axios";

const interceptedRequests = [];
const interceptedResponses = [];

axios.interceptors.request.use(request => {
  interceptedRequests.push(request.url);
  console.log("REQUEST:");
  console.log("URL:", request.url);
  console.log("METHOD:", request.method);
  console.log("HEADERS:", request.headers);
  console.log("DATA:", request.data);
  return request;
});

axios.interceptors.response.use(response => {
  interceptedResponses.push(response.config.url);
  console.log("RESPONSE:");
  console.log("STATUS:", response.status);
  console.log("STATUS TEXT:", response.statusText);
  console.log("HEADERS:", response.headers);
  console.log("DATA:", response.data);
  return response;
});


test("Get all users", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log(" DATA:", response.data);       
  // console.log(" HEADERS:", response.headers); 
  // console.log(" STATUS:", response.status);   
  // console.log(" STATUS TEXT:", response.statusText); 

expect(response.status).toBe(200); 
expect(response.statusText).toBe("OK"); 
expect(response.headers["content-type"]).toContain("application/json"); 
expect(Array.isArray(response.data)).toBe(true); 
response.data.forEach(post => {    
    expect(post).toHaveProperty("userId"); 
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("body");
  });
});


test("Get the user", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1", {
    headers: {
      "Content-Type": "application/json",
    },
  });

expect(response.status).toBe(200); 
expect(response.statusText).toBe("OK"); 
expect(response.headers["content-type"]).toContain("application/json"); 
// object 
expect(response.data).toHaveProperty("userId");
  expect(response.data).toHaveProperty("id");
  expect(response.data).toHaveProperty("title");
  expect(response.data).toHaveProperty("body");
});



test("Get the user comments", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log(" DATA:", response.data);       
  // console.log(" HEADERS:", response.headers); 
  // console.log(" STATUS:", response.status);   
  // console.log(" STATUS TEXT:", response.statusText); 

expect(response.status).toBe(200); 
expect(response.statusText).toBe("OK"); 
expect(response.headers["content-type"]).toContain("application/json"); 
expect(Array.isArray(response.data)).toBe(true); // array
response.data.forEach(post => {     
    expect(post).toHaveProperty("postId"); 
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("name");
    expect(post).toHaveProperty("email");
    expect(post).toHaveProperty("body");
  });
});


test("Get the user comments by ID", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/comments?postId=1", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log(" DATA:", response.data);       
  // console.log(" HEADERS:", response.headers); 
  // console.log(" STATUS:", response.status);   
  // console.log(" STATUS TEXT:", response.statusText);   

expect(response.status).toBe(200); 
expect(response.statusText).toBe("OK"); 
expect(response.headers["content-type"]).toContain("application/json"); 
expect(Array.isArray(response.data)).toBe(true); // array
response.data.forEach(post => {     
    expect(post).toHaveProperty("postId"); 
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("name");
    expect(post).toHaveProperty("email");
    expect(post).toHaveProperty("body");
  });
});

test("Create a post", async () => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: "BMW",
    body: "car",
    userId: 1991
  }, {
    headers: {
      "Content-Type": "application/json",
    }
  });

  // console.log(" DATA:", response.data);       
  // console.log(" HEADERS:", response.headers); 
  // console.log(" STATUS:", response.status);   
  // console.log(" STATUS TEXT:", response.statusText); 

  expect(response.status).toBe(201);
  expect(response.statusText).toBe("Created");
  expect(response.headers["content-type"]).toContain("application/json");
  expect(response.data).toHaveProperty("id");     
  expect(response.data).toHaveProperty("title", "BMW");
  expect(response.data).toHaveProperty("body", "car");
  expect(response.data).toHaveProperty("userId", 1991);
});


test("Delete a post", async () => {
  const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1")
   
  // console.log(" DATA:", response.data);       
  // console.log(" HEADERS:", response.headers); 
  // console.log(" STATUS:", response.status);   
  // console.log(" STATUS TEXT:", response.statusText); 
  // console.log(" PREVIEW:", JSON.stringify(response.data, null, 2));

  expect(response.status).toBe(200);
});

test("Check interceptors worked for all requests", () => {

console.log("Intercepted requests:", interceptedRequests);
console.log("Intercepted responses:", interceptedResponses);
  
// Check url more then 0
expect(interceptedRequests.length).toBeGreaterThan(0);
expect(interceptedResponses.length).toBeGreaterThan(0);

// Check that each URL was intercepted
interceptedRequests.forEach(url => {
    expect(interceptedRequests).toContain(url);
  });

  interceptedResponses.forEach(url => {
    expect(interceptedRequests).toContain(url);
  });
});