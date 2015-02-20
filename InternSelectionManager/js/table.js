/**
 * Created by williambjohnson on 2/18/15.
 */
var $table = $('table'),
  process = false;

$('.error').click(function(){
  $.tablesorter.showError( $table, 'This is the error row');
});

$('.process').click(function(){
  process = !process;
  $.tablesorter.isProcessing( $table, process );
});

$('.sortable').click(function(){
  $table
    .find('.tablesorter-header:last').toggleClass('sorter-false')
    .trigger('update');
});

$table
  .tablesorter({
    sortList: [ [0,0], [1,0], [2,0] ],
    widgets : [ 'zebra', 'columns', "filter" ]
  })
  .tablesorterPager({
    // target the pager markup - see the HTML block below
    container: $(".pager")
  });
