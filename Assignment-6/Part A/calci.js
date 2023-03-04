$(document).ready(function () {
  
  // var username = sessionStorage.getItem("username");
  // if (
  //   !username ||
  //   username == null ||
  //   username == undefined ||
  //   username.length == 0
  // ) {
  //   alert("please login again");
  //   window.location = "./index.html";
  // } 
  // else {
  //   var name = sessionStorage.getItem("username");
  //   $("#name").append(name);
  // }

  $("#result").html("");
  operations();
});

let validateNumber = (number) => {
  var number_regex = /^-?(0|[0-9]\d*)?(\.\d+)?(?<=\d)$/;
  if (number_regex.test(number)) {
    return true;
  } else {
    return false;
  }
};

let operations = () => {
  for (let i = 0; i <= 4; i++) {

    $(`#${i}`).click((event) => {
      var operation = event.target.id;

      var number1 = $("#field1").val();
      var number2 = $("#field2").val();
      
      var number1validate = false;
      var number2validate = false;
      
      $("#field1error").show();
      $("#field2error").show();
      
      if (!number1 || number1.length == 0) {
        $("#field1error").html("First Number is missing");
      }
      else if (!validateNumber(number1)) {
        $("#field1error").html("Enter valid number in first field");
      }
      else {
        number1validate = true;
        $("#field1error").html("");
      }
      
      if (!number2 || number2.length == 0) {
        $("#field2error").html("Second Number is missing");
      } else if (!validateNumber(number2)) {
        $("#field2error").html("Enter valid number in second field");
      }
      else {
        number2validate = true;
        $("#field2error").html("");
      }
      
      $("#field1").focus(function () {
        $("#field1error").html("");
        $("#result").html("");
      });
      
      $("#field2").focus(function () {
        $("#field2error").html("");
        $("#result").html("");
      });
      
      $("#result").show();

      if (number1validate == true && number2validate == true) {
        
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);
        
        var result;
        
        if (operation == 0) {
          result = number1 + number2;
        }
        
        if (operation == 1) {
          result = number1 - number2;
        }

        if (operation == 2) {
          result = number1 * number2;
        }

        if (operation == 3) {
          result = number1 / number2;
          if (number2 == 0) {
            $("#excep").show();
          }
        }

        if (operation == 4) {
          number1 = "";
          number2 = "";
          $("#result").val("");
          $("#field1").val(number1);
          $("#field2").val(number2);
        }

        if (operation != 4) {
          $("#result").show();
          $("#result").val(result);
        }

      }
      else {
        $("#result").html("");
      }

    });
  }
};