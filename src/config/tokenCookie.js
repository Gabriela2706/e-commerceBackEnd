export const tokenCookie = (req) => {
  const token = req.cookies.accessToken;
  if (token) {
    return token;
  } else {
    null;
  }
};
