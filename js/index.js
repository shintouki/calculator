$(document).ready(function() {
  $("#ac_button").click(function() {
    $("#output").empty();
  });
  $("#ce_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    } else {
      let currentText = $("#output").text();
      // Delete last character
      $("#output").text(currentText.substring(0, currentText.length - 1));
    }
  });
  $("#mod_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "%");
  });
  $("#divide_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "/");
  });

  $("#seven_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "7");
  });
  $("#eight_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "8");
  });
  $("#nine_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "9");
  });
  $("#multiply_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "*");
  });

  $("#four_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "4");
  });
  $("#five_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "5");
  });
  $("#six_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "6");
  });
  $("#minus_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "-");
  });

  $("#one_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "1");
  });
  $("#two_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "2");
  });
  $("#three_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "3");
  });
  $("#plus_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "+");
  });

  $("#zero_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + "0");
  });
  $("#decimal_button").click(function() {
    if ($("#output").text() === "Error") {
      $("#output").empty();
    }
    $("#output").text($("#output").text() + ".");
  });
  $("#equal_button").click(function() {
    let final_list = $("#output").text();
    let finalSolution = solve(final_list);
    $("#output").text(finalSolution);
  });

  function solve(str) {

    let firstNumNeg = false;
    if (str.charAt(0) === "-") {
      firstNumNeg = true;
      str = str.substring(1);
    }
    // Split at */+-% to get operands or numbers.
    let operands = str.split(/\*|\/|\+|-|%/);
    // Split at numbers to get operators.
    let operators = str.split(/(?:\d*\.)?\d+/);
    operators.shift();
    operators.pop();
    if (firstNumNeg) {
      operands[0] = parseFloat(operands[0]) * -1;
    }

    // muliply, divide, and modulo
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "*") {
        let partialSolution = parseFloat(operands[i]) * parseFloat(operands[i + 1]);
        operands.splice(i, 2, partialSolution);
        operators.splice(i, 1);
        i--;
      } else if (operators[i] === "/") {
        let partialSolution = parseFloat(operands[i]) / parseFloat(operands[i + 1]);
        operands.splice(i, 2, partialSolution);
        operators.splice(i, 1);
        i--;
      } else if (operators[i] === "%") {
        let partialSolution = parseFloat(operands[i]) % parseFloat(operands[i + 1]);
        operands.splice(i, 2, partialSolution);
        operators.splice(i, 1);
        i--;
      }
    }

    // add and subtract
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "+") {
        let partialSolution = parseFloat(operands[i]) + parseFloat(operands[i + 1]);
        operands.splice(i, 2, partialSolution);
        operators.splice(i, 1);
        i--;
      } else if (operators[i] === "-") {
        let partialSolution = parseFloat(operands[i]) - parseFloat(operands[i + 1]);
        operands.splice(i, 2, partialSolution);
        operators.splice(i, 1);
        i--;
      }
    }
    if (!isFinite(operands[0]) || operands[0] === "") {
      return "Error";
    }

    return operands[0];
  }

});