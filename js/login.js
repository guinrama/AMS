/* In this File is related to Login Details*/

var login = {
    validLoginDetails: function(data) {
        var param = {
            "uname": data[0],
            "pass": data[1],
            "category": "login"
        };

        var _loginCallBack = function(responseText) {
            if (responseText === "success") {
                location.href = "home.html";
            } else {
                alert("Please Enter Proper Username and Password..!!");
            }
        }

        util.sendPostRequest(param, _loginCallBack);
    },
    addLoginEvent: function() {
        var loginBtn = document.getElementById("loginSubmit");

        loginBtn.addEventListener('click', function() {
            var values = [];
            inputflds = document.getElementsByClassName("loginInput");

            if (inputflds[0].value.trim() === "") {
                alert('Please Enter Username !!!');
                return;
            } else if (inputflds[1].value.trim() === "") {
                alert('Please Enter Password !!!');
                return;
            }

            values.push(inputflds[0].value);
            values.push(inputflds[1].value);
            inputflds[0].value = "";
            inputflds[1].value = "";

            login.validLoginDetails(values);
        });
        loginBtn.addEventListener('mouseover', function() {
            this.style.backgroundColor = "#366ab3";
        });
        loginBtn.addEventListener('mouseout', function() {
            this.style.backgroundColor = "#786D5F";
        });
    },
    addResetEvent: function() {
        var resetBtn = document.getElementById("loginReset");
        resetBtn.addEventListener('click', function() {
            inputflds = document.getElementsByClassName("loginInput");
            inputflds[0].value = "";
            inputflds[1].value = "";
        });
        resetBtn.addEventListener('mouseover', function() {
            this.style.backgroundColor = "#366ab3";
        });
        resetBtn.addEventListener('mouseout', function() {
            this.style.backgroundColor = "#786D5F";
        });
    },
    register: function(data) {
        var keysArray = ["name", "email", "phone", "uname", "pass"];
        var param = {};
        for (var i = 0; i < keysArray.length; i++) {
            param[keysArray[i]] = data[i];
        }
        param["category"] = "register";

        var _registerCallBack = function(responseText) {
            if (httpReq.responseText === "success") {
                alert("Data Added Successfully ..!!!");
            } else {
                alert("Problem in adding Data. Please add data Later..!!!");
            }
        }

        util.sendPostRequest(param, _registerCallBack);
    },
    addRegisterEvent: function() {
        var popup = document.getElementById("popup");
        document.getElementById("register").addEventListener('click', function() {
            util.show(popup);
        });
    },
    addCloseEvent: function() {
        document.getElementById("closeBtn").addEventListener('click', function() {
            util.hide(popup);
        });
    },
    addSubmitInRegisterEvent: function() {
        var submit_register = document.getElementById("submit_popup");
        submit_register.addEventListener('click', function() {
            var regValues = [];
            var fields = document.getElementsByClassName("popupInput");

            for (var i = 0; i < fields.length; i++) {
                regValues.push(fields[i].value);
            }
            //util.hidePopup();
            //login.register(regValues);
        });
    },
    init: function() {
        // Used for initialize the App. Init function is used for adding all the Event handler functions to the respective Buttons and Links.
        this.addLoginEvent(); // Adding the Event Handler function for Login Button.
        this.addResetEvent(); // Adding the Event Handler function for Reset Button.
        this.addRegisterEvent(); // Adding the Event Handler function for Register Link.
        this.addCloseEvent(); // Adding the Event Handler function for Close Image Link.   
        this.addSubmitInRegisterEvent(); // Adding the Event Handler function for Submit Button inside Register.
    }
}

login.init();