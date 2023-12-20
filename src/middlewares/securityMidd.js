//midd para los que son administradores
export const adminView = (req, res, next) => {
  try {
    const admin = req.email == "admincoder@coder.com" ? "admin" : "visit";
    res.status(200).send({ responde: admin });
    next();
  } catch (e) {
    return res.status(500).json({
      message: error.message,
      response: false,
      from: "Desde el Midd de vista de administrador",
    });
  }
};

export const userView = (req, res, next) => {
  try {
    if (!req.user) return res.redirect("/users/login");
    res.status(200).send({ error: false, admin });
    next();
  } catch (e) {
    return res.status(500).json({
      message: error.message,
      response: false,
      from: "Desde el Midd de vista de usuario",
    });
  }
};
