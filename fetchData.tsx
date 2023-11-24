const FetchData = async (values: any, path: string) => {
  const response = await fetch(
    ` https://absi-apis.shelter-technology.com/Auth/${path}`,
    {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

export default FetchData;
