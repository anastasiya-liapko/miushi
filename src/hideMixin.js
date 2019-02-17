export const hideMixin = {
  created: function() {
    window.addEventListener('mouseup', this.hide);
  },
  beforeDestroy: function () {
    window.removeEventListener('mouseup', this.hide);
  }
};