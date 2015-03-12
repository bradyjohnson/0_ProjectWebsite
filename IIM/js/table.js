/**
 * Created by williambjohnson on 3/3/15.
 */
$(function () {

  var $table = $('table').tablesorter({
    theme: 'blue',
    widgets: ["zebra", "filter"],
    widgetOptions: {
      // use the filter_external option OR use bindSearch function (below)
      // to bind external filters.
      // filter_external : '.search',

      filter_columnFilters: false,
      filter_saveFilters: true,
      filter_reset: '.reset'
    }
  });

  // Target the $('.search') input using built in functioning
  // this binds to the search using "search" and "keyup"
  // Allows using filter_liveSearch or delayed search &
  // pressing escape to cancel the search
  $.tablesorter.filter.bindSearch($table, $('.search'));

  // Basic search binding, alternate to the above
  // bind to search - pressing enter and clicking on "x" to clear (Webkit)
  // keyup allows dynamic searching
  /*
   $(".search").bind('search keyup', function (e) {
   $('table').trigger('search', [ [this.value] ]);
   });
   */

  // Allow changing an input from one column (any column) to another
  $('select').change(function () {
    // modify the search input data-column value (swap "0" or "all in this demo)
    $('.selectable').attr('data-column', $(this).val());
    // update external search inputs
    $.tablesorter.filter.bindSearch($table, $('.search'), false);
  });

});