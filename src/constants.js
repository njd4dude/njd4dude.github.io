// Define isTouchDevice variable
const isTouchDevice =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;

// Export isTouchDevice variable
export default isTouchDevice;
