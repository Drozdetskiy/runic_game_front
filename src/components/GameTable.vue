<template>
<div class="game-table">
  <div class="card_wrapper" v-for="card in table_cards" >
    <Card v-if="card[4]" />
  </div>
</div>

</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'GameTable',
  components: {
    Card
  },
  props: {
    table_cards: Array
  }
}
</script>

<style scoped>
.game-table {
    width: 540px;
    height: 600px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    perspective: 1000px;
}

.card_wrapper {
    width: calc(33.333% - 10px);
    height: calc(33.333% - 10px);
    margin: 5px;

}

</style>
