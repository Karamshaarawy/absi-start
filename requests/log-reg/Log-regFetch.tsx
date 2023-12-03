const FetchData = async (values: any, path: string) => {
  const response = await fetch(
    `https://absi-apis.shelter-technology.com/Auth/${path}`,
    {
      method: "POST",
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
};

export default FetchData;
