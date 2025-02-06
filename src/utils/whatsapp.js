export const redirectToWhatsApp = () => {
  const phoneNumber = "2347086498146";
  const encodedMessage =
    "Hello, I need you to be serious or i will break your head";
  window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
