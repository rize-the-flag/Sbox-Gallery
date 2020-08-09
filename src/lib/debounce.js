export function debounce ( func, delay ) {
  let isDelayed = false;
  return function () {
    if ( isDelayed )  return;
    func.apply( this, arguments );
    isDelayed = true;
    setTimeout( () => isDelayed = false, delay );
  };
}
