export default async function RegOtp(values: any, token: any) {
  const response = await fetch(
    `https://absi-apis.shelter-technology.com/Auth/verifyOTP/${values}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}
