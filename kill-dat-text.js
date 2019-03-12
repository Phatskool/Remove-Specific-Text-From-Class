<script>
jQuery('.YOUR-CLASS').each( function() {
  oldHTML = $(this).html();
  newHTML = oldHTML.replace('UNWANTED-TEXT','');
  jQuery(this).html(newHTML);
});
</script>