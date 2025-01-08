// src/services/apiService.js

// Placeholder base URL – update these once your API Gateway is deployed
const BASE_URL = "https://n0ahn6cxe9.execute-api.ap-southeast-2.amazonaws.com/prod";

export const syncUserInfo = async (userInfo) => {
  const response = await fetch(`${BASE_URL}/syncUser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInfo),
  });
  if (!response.ok) throw new Error("Sync failed");
  return response.json();
};

export const fetchUserProfile = async (userSub) => {
  const response = await fetch(`${BASE_URL}/profile?sub=${userSub}`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const updateUserProfile = async (userSub, profileData) => {
  const response = await fetch(`${BASE_URL}/profile`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sub: userSub, ...profileData }),
  });
  if (!response.ok) throw new Error("Update failed");
  return response.json();
};
