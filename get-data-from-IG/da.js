var l_empno;
// fetch the model for the interactive grid
var model = apex.region("my_ig").widget().interactiveGrid("getViews", "grid").model;
// loop through the records
model.forEach(function(igrow) {
   if(l_empno == null){
       // first row without seperator ":"
       l_empno = igrow[model.getFieldKey("DOC_SEQ")];
   }
   else {
       // add seperator ":" to each additional row
       l_empno = l_empno + ':' + igrow[model.getFieldKey("DOC_SEQ")];
   }
}
);

// Set Page Item
apex.item( "P176_EMPNO_JS" ).setValue (l_empno);
