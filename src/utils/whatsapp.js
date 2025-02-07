export const redirectToWhatsApp = () => {
  const phoneNumber = "2347086498146";
  const encodedMessage =
    "Hi, I wish to request for aid with the services Sheya Solutions LLC offers.";
  window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
