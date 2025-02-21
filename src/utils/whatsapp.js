export const redirectToWhatsApp = () => {
  const phoneNumber = "14434091038";
  const encodedMessage =
    "Hi, I wish to request for aid with the services Sheya Solutions LLC offers.";
  window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
