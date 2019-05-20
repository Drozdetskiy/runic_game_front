<template>
<div class="sidebar">
      <LeftSideCard 
      v-for="number in right_side_cards_number"
      v-bind:key="number" 
      :style="{top: card_top_move(number) + 'px', left: card_left_move(number) + 'px'}" 
      :top_power="right_side_cards_power[number].top" 
      :bot_power="right_side_cards_power[number].bot" 
      :left_power="right_side_cards_power[number].left" 
      :right_power="right_side_cards_power[number].right" />
</div>

</template>

<script>
// @ is an alias to /src
import LeftSideCard from '@/components/LeftSideCard.vue'

export default {
  name: 'RightSideBar',
  components: {
    LeftSideCard
  },
  props: {
    right_side_cards_number: Array,
    right_side_cards_power: Array,
  },
methods: {
  card_top_move (number) {
    return number * -80
  },
  card_left_move (number) {
    return number * 10
  }
}
}
</script>

<style scoped>
.sidebar {
    width: 150px;
    height: 500px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    /* perspective: 90px; */
}
</style>