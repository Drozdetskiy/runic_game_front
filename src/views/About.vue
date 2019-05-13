<template>
  <div class="about">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'about',
  props: {
    name: {
      type: String,
      default: 'def'
    }
  },
}
</script>