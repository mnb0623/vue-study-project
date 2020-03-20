<template>
  <div>
    <h3>this is Parent</h3>
    <p>this is routerView</p>
    <div class="frame">
      <router-view />
    </div>
  </div>
</template>

<script>
console.log("Parent");
</script>

<style scoped>
h3 {
  color: blue;
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
.frame {
  padding: 5px 0;
  border: solid 1px;
}

</style>
