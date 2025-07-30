function detectPlatform() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/windows phone/i.test(userAgent)) {
    return "WindowsPhone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "other";
}

function hideBadgeBasedOnPlatform() {
  switch (detectPlatform()) {
    case "iOS":
      document.getElementById("google-play-badge").remove();
      break;

    case "Android":
      document.getElementById("app-store-badge").remove();
      break;

    default:
      break;
  }
}