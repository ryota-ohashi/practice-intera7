import '../scss/style.scss'

import Hello from './modules/hello';

var HOGE = HOGE || {};

HOGE = {
  init: function() {
    this.setParams();
    this.bind();
  },
  setParams: function() {

  },
  bind: function() {
    new Hello();
  },
};

window.addEventListener('DOMContentLoaded', () => {
  HOGE.init();
});

