
angular.module('app').directive('zoomIn', () => 
   ({
    restrict: 'A',
    link: (scope, el, attrs) => {
      el.on('mouseenter', () => {
        el[0].style.transform="scale(1.1,1.1)"
      })
      el.on('mouseleave', () => {
        el[0].style.transform="scale(1,1)"
      })
    }
  })
)