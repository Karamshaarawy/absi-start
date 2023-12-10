const resendOtp = async (email: string | null) => {
  const response = await fetch(
    `https://absi-apis.shelter-technology.com/Auth/resendOTP/${email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer Y29tLm92ZXJyaWRlZWcubW9kZXJuLWFjYWRlbXkuY29tcHV0ZXIuZGVsZWdhdGlvbg=",
      },
    }
  );
  const data = await response.json();
  return data;
};

export default resendOtp;
