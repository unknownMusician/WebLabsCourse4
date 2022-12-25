window.onload = function()
{
    let formContainer = document.getElementById("form-container");
    formContainer.innerHTML = getAuthElement();
}

function handleOpenRegister() {
    let formContainer = document.getElementById("form-container");
    formContainer.innerHTML = getRegisterElement();
}

function handleOpenLogin() {
    let formContainer = document.getElementById("form-container");
    formContainer.innerHTML = getAuthElement();
}

function handleLogin() {
    let formContainer = document.getElementById("form-container");

    let user = Database.getUser(document.getElementById("email").value, document.getElementById("password").value);

    console.log(user);

    if (user === null) {
        handleOpenLogin();
    } else {
        formContainer.innerHTML = getLoggedElement(user);
    }
}

function handleRegister() {
    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        group: document.getElementById("group").value,
        variant: document.getElementById("variant").value,
        tel: document.getElementById("tel").value,
    }


    Database.setUser(user);
    handleOpenLogin();
}

class Database {
    static getUser(email, password) {
        let databaseData = localStorage.getItem("databaseData");

        if (databaseData === null) {
            return null;
        }

        let data = JSON.parse(databaseData);

        for (let i = 0; i < data.length; i++) {
            let user = data[i];

            if (user.email === email && user.password === password) {
                return user;
            }
        }

        return null;
    }

    static setUser(user) {
        let databaseData = localStorage.getItem("databaseData");

        let data;
        if (databaseData === null) {
            data = [];
        } else {
            data = JSON.parse(databaseData);
        }

        let isInserted = false;

        for (let i = 0; i < data.length; i++) {
            if (data[i].email === user.email) {
                isInserted = true;
                data[i] = user;
                break;
            }
        }

        if (!isInserted) {
            data[data.length] = user;
        }

        localStorage.setItem("databaseData", JSON.stringify(data));
    }
}

function getAuthElement() {
    return `
    <div class="form">
        <div class="title">Authorization</div>
        <input type="email" name="email" id="email" placeholder="email" required/>
        <input type="password" name="password" id="password" placeholder="password" required/>
        <button id="submit" onclick="handleLogin()" required>Sign In</button>
        <button id="register" onclick="handleOpenRegister()" required>Register</button>
    </div>`;
}

function getLoggedElement(user) {
    return `
    <div class="form">
        <div class="item">Name: ${user.username}</div>
        <div class="item">Group: ${user.group}</div>
        <div class="item">Variant: ${user.variant}</div>
        <div class="item">Tel: ${user.tel}</div>
        <button id="submit" onclick="handleOpenLogin()" required>Log Out</button>
    </div>`;
}

function getRegisterElement() {
    return `
    <div class="form">
        <div class="title">Registration</div>
        <input type="email" name="email" id="email" placeholder="email" required/>
        <input type="password" name="password" id="password" placeholder="password" required/>
        <input type="text" placeholder="name" id="username" required/>
        <input type="text" placeholder="group" id="group" required/>
        <input type="text" placeholder="variant" id="variant" required/>
        <input type="text" placeholder="tel" id="tel" required/>
        <button id="submit" onclick="handleRegister()" required>Register</button>
        <button id="submit" onclick="handleOpenLogin()" required>Sign In</button>
    </div>`;
}