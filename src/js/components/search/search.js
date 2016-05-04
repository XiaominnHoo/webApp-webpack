/**
 * Created by huxiaomin on 16/5/4.
 */

import "../../../sass/components/search.scss";

export default class Search {

  constructor( {el} ) {
    this.$el = el;
    this.$el.on("input", ".js-search-input", this.searchActivate.bind(this));
  }

  searchActivate (e) {
    console.log($(e.target).val());
  }

}