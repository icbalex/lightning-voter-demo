angular.module('app').component('detailPanel', {
  transclude: true,
  templateUrl: '/components/detailPanel.html',
  bindings: {
    title: '@',
    initialCollapsed: '@collapsed'
  },
  controller: () => {
    this.collapsed = (this.initialCollapsed === 'true');

    this.collapse = () => {
      this.collapsed = !this.collapsed;
    }
  }
})




