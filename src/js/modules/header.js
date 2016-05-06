/**
 * Created by huxiaomin on 16/5/4.
 */

import "cssModu/_header";
import Search from "jsCompo/search";

export default class Header {
  constructor ( {el, templateId} ) {
    this.$el = el;
    this.search = new Search ({
      el: this.$el.find('.js-search-wrapper'),
      templateId: templateId
    });
  }
}