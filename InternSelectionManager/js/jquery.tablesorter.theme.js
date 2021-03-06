/**
 * Created by williambjohnson on 2/18/15.
 */
$(function() {

  // Extend the themes to change any of the default class names
  $.extend($.tablesorter.themes.jui, {
    // change default jQuery uitheme icons - find the full list of icons at
    // http://jqueryui.com/themeroller/ (hover over them for their name)
    table        : 'ui-widget ui-widget-content ui-corner-all', // table classes
    caption      : 'ui-widget-content',
    // header class names
    header       : 'ui-widget-header ui-corner-all ui-state-default', // header classes
    sortNone     : '',
    sortAsc      : '',
    sortDesc     : '',
    active       : 'ui-state-active', // applied when column is sorted
    hover        : 'ui-state-hover',  // hover class
    // icon class names
    icons        : 'ui-icon', // icon class added to the <i> in the header
    iconSortNone : 'ui-icon-carat-2-n-s', // class name added to icon when column is not sorted
    iconSortAsc  : 'ui-icon-carat-1-n', // class name added to icon when column has ascending sort
    iconSortDesc : 'ui-icon-carat-1-s', // class name added to icon when column has descending sort
    filterRow    : '',
    footerRow    : '',
    footerCells  : '',
    even         : 'ui-widget-content', // even row zebra striping
    odd          : 'ui-state-default'   // odd row zebra striping
  });

  // call the tablesorter plugin and apply the ui theme widget
  $("table").tablesorter({

    theme : 'jui', // theme "jui" and "bootstrap" override the uitheme widget option in v2.7+

    headerTemplate : '{content} {icon}', // needed to add icon for jui theme

    // widget code now contained in the jquery.tablesorter.widgets.js file
    widgets : ['uitheme', 'zebra'],

    widgetOptions : {
      // zebra striping class names - the uitheme widget adds the class names defined in
      // $.tablesorter.themes to the zebra widget class names
      zebra   : ["even", "odd"],

      // set the uitheme widget to use the jQuery UI theme class names
      // ** this is now optional, and will be overridden if the theme name exists in $.tablesorter.themes **
      // uitheme : 'jui'
    }

  });

});
