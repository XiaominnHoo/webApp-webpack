/**
 * Created by huxiaomin on 16/5/4.
 */

import "../../../sass/modules/header.scss";
import Search from "../../../js/components/search/search.js";

export default class Header {
  constructor ( {el, templateId} ) {
    this.$el = el;
    this.search = new Search ({
      el: this.$el.find('.js-search-wrapper'),
      templateId: templateId
    });
  }
}