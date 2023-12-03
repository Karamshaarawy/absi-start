export default async function ConfirmResetPassword(values: any) {
  const response = await fetch(
    `https://absi-apis.shelter-technology.com/Auth/confirmResetPassword`,
    {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer Y29tLm92ZXJyaWRlZWcubW9kZXJuLWFjYWRlbXkuY29tcHV0ZXIuZGVsZWdhdGlvbg=",
      },
    }
  );
  const data = await response.json();
  return data;
}
