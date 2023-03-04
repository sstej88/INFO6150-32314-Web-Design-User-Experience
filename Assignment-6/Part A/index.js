$(document).ready(function () {
  
  sessionStorage.removeItem("username");
  
  $("#username").val("");
  $("#email").val("");
  $("#password").val("");

  $("#username").focus(function () {
    $("#nameerror").html("");
  });

  $("#email").focus(function () {
    $("#emailerror").html("");
    const username = $("#username").val().trim();
    $("#username").val(username);
  });

  $("#password").focus(function () {
    $("#passworderror").html("");
  });

  $("#validate").click(()=>{

    var email = $("#email").val();
    var username = $("#username").val();
    var password = $("#password").val();
    
    var namevalidate = false;
    var emailvalidate = false;
    var passwordvalidate = false;
    
    $("#nameerror").show();
    $("#passworderror").show();
    $("#emailerror").show();
    
    if (username.length == 0) {
      $("#nameerror").html("Username is mandatory");
    }
    else if (username.length < 3 || username.length > 10) {
      $("#nameerror").html("username must be between 3 and 10");
    }
    else if (/\d+/.test(username)) {
      $("#nameerror").html(
        "username must not contain numbers try representing in Roman variables"
      );
    }
    else if (/[^\w\s]/g.test(username)) {
      $("#nameerror").html("username must not contain special characters");
    }
    else if (username.trim().length == 0) {
      $("#nameerror").html("username can't have spaces");
    }
    else {
      namevalidate = true;
      $("#nameerror").html("");
    }

    if (!password) {
      $("#passworderror").html("Password is mandatory");
      $("#length").removeClass("text-success").addClass("text-danger");
      $("#small").removeClass("text-success").addClass("text-danger");
      $("#capital").removeClass("text-success").addClass("text-danger");
      $("#special").removeClass("text-success").addClass("text-danger");
      $("#number").removeClass("text-success").addClass("text-danger");
    }
    else {
      console.log($("#length").attr("class"), $("#small").attr("class"), $("#capital").attr("class"), $("#special").attr("class"), $("#number").attr("class"));

      if (
        $("#length").attr("class") == "text-success" &&
        $("#small").attr("class") == "text-success" &&
        $("#capital").attr("class") == "text-success" &&
        $("#special").attr("class") == "text-success" &&
        $("#number").attr("class") == "text-success"
      ) {
        passwordvalidate = true;
        $("#passworderror").html("");
        $("#pswd_strgth").html("");
      }
    }

    if (!email) {
      $("#emailerror").html("Email is mandatory");
    }
    else if (!validateEmail(email)) {
      $("#emailerror").html("Northeastern Email ID is valid");
    }
    else {
      emailvalidate = true;
      $("#emailerror").html("");
    }

    if (namevalidate && emailvalidate && passwordvalidate) {
      sessionStorage.setItem("username", username.trim());
      window.location = "./calci.html";
    }

  });

  const passwordInput = $("#password");
  passwordInput.keyup(function () {
      
      var pswd = $(this).val();
      if (pswd.length < 8) {
        $("#length").removeClass("text-success").addClass("text-danger");
      }
      else {
        $("#length").removeClass("text-danger").addClass("text-success");
      }

      if (pswd.match(/[A-Z]/)) {
        $("#capital").removeClass("text-danger").addClass("text-success");
      }
      else {
        $("#capital").removeClass("text-success").addClass("text-danger");
      }

      if (pswd.match(/[a-z]/)) {
        $("#small").removeClass("text-danger").addClass("text-success");
      }
      else {
        $("#small").removeClass("text-success").addClass("text-danger");
      }

      if (pswd.match(/[!@#$%^&()'[\]"?+-/*={}.,;:_]+/)) {
        $("#special").removeClass("text-danger").addClass("text-success");
      }
      else {
        $("#special").removeClass("text-success").addClass("text-danger");
      }

      if (pswd.match(/\d/)) {
        $("#number").removeClass("text-danger").addClass("text-success");
      }
      else {
        $("#number").removeClass("text-success").addClass("text-danger");
      }
    })

    .focus(function () {
      $("#pswd_strgth").show();
    });

});

var validateEmail = (email) => {
  var filter = /^[a-zA-Z0-9._%+-]+@northeastern+\.edu$/;
  if (filter.test(email)) {
    return true;
  } else {
    return false;
  }
};

var validatePassword = (password) => {
  var password_regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password_regex.test(password)) {
    return true;
  } else {
    return false;
  }
};