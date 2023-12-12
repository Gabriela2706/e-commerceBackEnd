//midd para los que son administradores
export const adminView = (req, res, next) => {
  try {
    const admin = req.email == "admincoder@coder.com" ? "admin" : "visit";
    res.status(200).send({ error: false, admin });
    next();
  } catch (e) {
    res.status(403).send({ error: true, msg: e.message });
  }
};

export const userView = (req, res, next) => {
  try {
    if (!req.user) return res.redirect("/users/login");
    res.status(200).send({ error: false, admin });
    next();
  } catch (e) {
    res.status(403).send({ error: true, msg: e.message });
  }
};
