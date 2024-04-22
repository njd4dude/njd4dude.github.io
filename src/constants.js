// Define isTouchDevice variable
const isTouchDevice =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;

// Log whether the device supports touch events or not
if (isTouchDevice) {
  console.log("The device supports touch events.");
} else {
  console.log("The device does not support touch events.");
}

// Export isTouchDevice variable
export default isTouchDevice;
