  function handleCredentialResponse(response) {
        const data = jwt_decode(response.credential)
           // console.log("Encoded JWT ID token: " + response.credential);
            console.log(data)

            fullName.textContent = data.name
            sub.textContent = data.sub
            given_name.textContent = data.given_name
            family_name.textContent = data.family_name
            email.textContent = data.email
            verifiedEmail.textContent = data.email_verified
            email.textContent = data.email
            picture.setAttribute("src", data.picture)
        }

      window.onload = function () {
        google.accounts.id.initialize({
          client_id: 
          "1050832334367-pf5047t2ofhkmlso9emq5t86r5hkakmr.apps.googleusercontent.com",
          callback: handleCredentialResponse
        });

        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "filled_black", 
            size: "large",
            type:  "standard",
            shape: "pill",
            text: "$ {button, text}",
            locale: "pt-br",
            logo_alignment: "center",
            width: "240"
        }  // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
      }