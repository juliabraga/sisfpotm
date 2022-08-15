<template>
  <div class="links">
    <h3>Links</h3>
    <ul>
      <li><a href="https://fpotm.net" target="_blank" rel="noopener">FPoTM.Net</a></li>
      <li><a href="https://cbtm.org.br" target="_blank" rel="noopener">CBTM</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterLink',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
