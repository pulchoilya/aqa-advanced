import axios from "axios";

let sid = null;

export function setSid(value) {
  sid = value;
}

export function getSid() {
  return sid;
}


//  --- TASK 1 --- 
export async function wrongUrlRequest() {
  const sid = getSid(); 

  try {
    const response = await axios.get(
      "https://qauto.forstudy.space/api/invalid-endpoint",
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: sid, 
        },
      }
    );
    console.log("Response data (should not happen):", response.data);
    return response.data;
  } catch (error) {
    const errObj = { error: true, status: error.response?.status, message: error.message };
    console.log("Caught error:", errObj);
    return errObj;
  }
}


//  --- TASK 2 --- 
export async function getCarModels(brandId) {
  const sid = getSid(); 

  const response = await axios.get("https://qauto.forstudy.space/api/cars/models", {
    headers: {
      "Content-Type": "application/json",
      Cookie: sid, // 
      Accept: "application/json", 
      "X-Test-Header": "MyCustomValue", 
    },
    params: {
      carBrandId: brandId 
    },
  });

  console.log("Response data:", response.data); 
  return response.data;
}


// --- TASK 3 --- 
export async function getUserProfileFake() {
  const FAKE_COOKIE = "sid=FAKE_SID";

  const response = await axios.get(
    "https://qauto.forstudy.space/api/users/profile",
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: FAKE_COOKIE
      },
      withCredentials: true
    }
  );
  return response.data;
}




// export async function WrongUrl() {
//   try {
//     const response = await axios.get("https://qauto.forstudy.space/api/invalid-endpoint");
//     return response.data;
//   } catch (error) {
//  
//     return { error: true, message: error.message };
//   }
// }