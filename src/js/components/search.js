/**
 * Created by huxiaomin on 16/5/4.
 */

import "cssComp/_search";

_.templateSettings = {
  interpolate: /\{\{=(.+?)\}\}/g,
  evaluate: /\{\{(.+?)\}\}/g
};

var result = {
  content: [
    {title: 'shoping', datetime: '2016-05-04 18:00', detail: '买买买'},
    {title: 'reading', datetime: '2016-05-05 22:00', detail: '人丑就该多读书'},
    {title: 'coding', datetime: '2016-05-08 10:00', detail: 'never stop coding'},
  ]
}

export default class Search {
  constructor( {el, templateId} ) {
    this.$el = el;
    this.templateId = templateId;
    this.$el.on("input", ".js-search-input", this.searchActivate.bind(this));
  }

  searchActivate () {
    $('tbody').empty();
    var compile = _.template($(this.templateId).html());
    $('table tbody').append(compile(result));
  }
}