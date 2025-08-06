var _this = this;
angular.module('app').component('detailPanel', {
    transclude: true,
    templateUrl: '/components/detailPanel.html',
    bindings: {
        title: '@',
        initialCollapsed: '@collapsed'
    },
    controller: function () {
        _this.collapsed = (_this.initialCollapsed === 'true');
        _this.collapse = function () {
            _this.collapsed = !_this.collapsed;
        };
    }
});
//# sourceMappingURL=detailPanel.js.map