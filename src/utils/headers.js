export const authHeaders = () => {
  const token = localStorage.getItem("jwt");
  return {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  };
};
