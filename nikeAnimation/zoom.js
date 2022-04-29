//Initial References
const imageContainer = document.getElementById("image-container");
const productImage = document.getElementById("product-image");
const overlay = document.getElementById("overlay");
const mouseOverlay = document.getElementById("mouse-overlay");

//events object(stores events for touch,mouse)
const events = {
  mouse: {
    move: "mousemove",
  },
  touch: {
    move: "touchmove",
  },
};

//initially blank
let deviceType = "";

//Checks for device type
const isTouchDevice = ()=> {
  try {
    //We try to create touch event (it would fail for desktops and throw error)
    deviceType = "touch";
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
}

//hides overlay by not displaying them 
const hideElement = () => {
  overlay.style.display = "none";
  mouseOverlay.style.display = "none";
};

//Check device so that deviceType variable is set to touch or mouse 
// This will depend if the device is a mobile , tablet or desktop
isTouchDevice();

/*In addEventListener we use the events object to set the event so deviceType would be set to touch or mouse since we called 'isTouchDevice()' above
E.g:
if deviceType = "mouse" => the statement for event would be events[mouse].move which equals to mousemove.
if deviceType = "touch" => the statement for event would be events[touch].move which equals to touchstart.
*/

imageContainer.addEventListener(events[deviceType].move, (e) => {
  //Try, catch to avoid any errors for touch screens
  try {
    //pageX and pageY return the position of client's cursor from top left pf screen
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    console.log(x,"\n",y);
  } catch (e) {}
  //get image height and width
  let imageWidth = imageContainer.offsetWidth;
  let imageHeight = imageContainer.offsetHeight;
  console.log(imageWidth,"\n",imageHeight);

  //check if mouse goes out of image container
  // if it is out ,no overlay will be displayed 
  if (
    imageWidth - (x - imageContainer.offsetLeft) < 15 ||
    x - imageContainer.offsetLeft < 15 ||
    imageHeight - (y - imageContainer.offsetTop) < 15 ||
    y - imageContainer.offsetTop < 15
  ) {
    hideElement()
  } else {
    overlay.style.display = "block";
    mouseOverlay.style.display = "inline-block";
  }

  var posX = ((x - imageContainer.offsetLeft) / imageWidth).toFixed(4) * 100;
  var posY = ((y - imageContainer.offsetTop) / imageHeight).toFixed(4) * 100;

  //set background position to above obtained values
  overlay.style.backgroundPosition = posX + "%" + posY + "%";

  //move the overlay with cursor
  mouseOverlay.style.top = y + "px";
  mouseOverlay.style.left = x + "px";
});
