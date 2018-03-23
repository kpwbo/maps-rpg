export function loadGoogleMaps() {
  const scriptTag = document.createElement('script');
  const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBVBzbvYKGj3AJOzYzfoJoV2keOdwdc6jg&callback=googleMapsLoaded';
  scriptTag.setAttribute('src', url);
  scriptTag.setAttribute('async', '');
  scriptTag.setAttribute('defer', '');
  document.body.appendChild(scriptTag);
}

export function onGoogleMapsLoaded() {
  return new Promise((resolve) => {
    window.googleMapsLoaded = resolve;
  });
}
