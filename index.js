function scuberGreetingForFeet(a) {
  if (a <= 400) {
    return "This one is on me!";
  }

  if (a >= 401 && a <= 2000) {
    return "That will be twenty bucks.";
  }

  if (a >= 2001 && a <= 2499) {
    return "I will gladly take your thirty bucks.";
  }

  if (a >= 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
