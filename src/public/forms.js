//FORMULARIO DE LOGIN
function formLogin() {
  document
    .getElementById("formLogin")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const infoLogin = {
        email,
        password,
      };

      console.log(infoLogin);

      const res = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        body: JSON.stringify(infoLogin),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resInfo = await res.json();
      console.log(resInfo);
      if (resInfo.error) {
      }
      localStorage.setItem("accessToken", resInfo.accessToken);
    });
}

//FORMULARIO DE REGISTRO

document
  .getElementById("formRegister")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const infoUsers = {
      name,
      lastname,
      email,
      password,
    };

    console.log(infoUsers);

    try {
      const res = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(infoUsers),
      });

      if (res.ok) {
        const resInfo = await res.json();
        console.log(resInfo);
        localStorage.setItem("accessToken", resInfo.accessToken);
      } else {
        console.error("Error en la solicitud:", res.status, res.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
    }
  });
