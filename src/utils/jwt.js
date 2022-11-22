export const jwtToObject = () => {
  const token = localStorage.getItem("jwt");
  const encPayload = token?.split(".")?.[1];
  const strPayload = atob(encPayload);
  const payload = JSON.parse(strPayload);
  return payload;
};
