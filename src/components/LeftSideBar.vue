<template>
<div class="sidebar">
      <LeftSideCard 
      v-for="number in side_cards_number" 
      v-on:choose="unChoose" 
      :style="{top: card_top_move(number) + 'px', left: card_left_move(number) + 'px'}" 
      :top_power="side_cards_power[number][0]" 
      :bot_power="side_cards_power[number][1]" 
      :left_power="side_cards_power[number][2]" 
      :right_power="side_cards_power[number][3]" />
</div>
<!-- <LeftSideCard v-on:choose="unChoose" v-if="side_cards_exist[side_cards_number]" style="top: 0px; left: 0px; z-index: 5;" top_power=9 bot_power=8 left_power=7 right_power=6 />
    <LeftSideCard v-on:choose="unChoose" v-if="side_cards_exist[side_cards_number]" style="top: -80px; left: -10px; z-index: 5;" top_power=9 bot_power=8 left_power=7 right_power=6 />
    <LeftSideCard v-on:choose="unChoose" v-if="side_cards_exist[side_cards_number]" style="top: -160px; left: -20px; z-index: 5;" top_power=9 bot_power=8 left_power=7 right_power=6 />
    <LeftSideCard v-on:choose="unChoose" v-if="side_cards_exist[side_cards_number]" style="top: -240px; left: -30px; z-index: 5;" top_power=9 bot_power=8 left_power=7 right_power=6 />
    <LeftSideCard v-on:choose="unChoose" v-if="side_cards_exist[side_cards_number]" style="top: -320px; left: -40px; z-index: 5;" top_power=9 bot_power=8 left_power=7 right_power=6 /> -->
</template>

<script>
// @ is an alias to /src
import LeftSideCard from '@/components/LeftSideCard.vue'

export default {
  name: 'LeftSideBar',
  components: {
    LeftSideCard
  },
  props: {
    side_cards_number: Array,
    side_cards_power: Array,
  },
 data () {
      return {
        data: [],
}
  },
methods: {
  unChoose (current_elem) {
    this.$children.forEach( (elem) => {
      if (current_elem != elem) {
        elem.isActive = false; elem.isChoose = false
        }
        }
        )
  },
  card_top_move (number) {
    return number * -80
  },
  card_left_move (number) {
    return number * -10
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