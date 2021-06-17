import Vue from "vue";
import moment from "moment";

Vue.filter("data-moment", function(value, formatString = "YYYY-MM-DD HH:mm:ss") {
  return moment(value).format(formatString);
});
