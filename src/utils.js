function isMobile() {
  if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

export const checkIsMobile = () => {
  if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

export const mobileDevice = window.matchMedia("only screen and (max-width: 1024px)").matches;

export const getImageUrl = (name) => {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}

export const fixTargetBody = (selectors, active) => { 
  const body = document.querySelector('body')
  const target = document.getElementById(selectors)
  if (active === 'open') {
    if (target) {
      target.style.display = 'block'
    }
    if(isMobile()) {
      body.style.position = 'fixed'
      body.style.overflow = 'hidden'
    } else {
      body.style.position = 'relative'
      body.style.overflow = 'hidden'
    }
  } else {
    body.style.position = 'relative'
    body.style.overflow = 'visible'
    if (target) {
      target.style.display = 'none'
    }
  }
}

export const hengshuping = () => {
  const supportOrientation = (typeof window.orientation === 'number' &&
    typeof window.onorientationchange === 'object');

    const init = function () {
    let htmlNode = document.body.parentNode,
      orientation;
    const body = document.querySelector('body')
    let updateOrientation = function () {
      if (supportOrientation) {
        orientation = window.orientation;
        switch (orientation) {
          case 90:
          case -90:
            orientation = 'landscape';
            break;
          default:
            orientation = 'portrait';
            break;
        }
      } else {
        orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
      }
      htmlNode.setAttribute('class', orientation);
      if (orientation === 'landscape') {
        body.style.overflow = 'hidden'
      } else {
        body.style.overflow = 'visible'
      }
    };

    if (supportOrientation) {
      window.addEventListener('orientationchange', updateOrientation, false);
    } else {
      //监听resize事件
      window.addEventListener('resize', updateOrientation, false);
    }

    updateOrientation();
  };

  window.addEventListener('DOMContentLoaded', init, false);
}
