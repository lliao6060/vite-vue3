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
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  if (active === 'open') {
    if (target) {
      target.style.display = 'block'
      body.style.position = 'relative'
      body.style.overflow = 'hidden'
    }
    if(isMobile()) {
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
      body.style.overflow = 'hidden'
    } else {
      body.style.position = 'relative'
      body.style.overflow = 'hidden'
    }
  } else {
    if(isMobile()) {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      body.style.overflow = 'visible'
    } else {
      body.style.overflow = 'visible'
    }
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
      //NOTE: 监听resize事件
      window.addEventListener('resize', updateOrientation, false);
    }

    updateOrientation();
  };

  window.addEventListener('DOMContentLoaded', init, false);
}

export const popupWindow = (pageURL, title, w, h) => {
  var left = window.outerWidth / 2 + window.screenX - ( w / 2)
  var top = (screen.height - h) / 4;  // for 25% - devide by 4  |  for 33% - devide by 3
  var targetWin = window.open(pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}

export const priceToNT = (price) => {
  if (price) {
    let toTwdPrice = price.toLocaleString(
      'zh-TW', {
        style: 'currency',
        currency: 'TWD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }
    );
    return toTwdPrice;
  }
}

//第一個字轉小寫
export const lowercaseFirst = (str) => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
//駝峰轉橫槓
export const toLine = str => str.replace(/([A-Z])/g,"-$1").toLowerCase()