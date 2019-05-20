<template>
  <div class="sidebar">
    <LeftSideCard
    v-for="number in left_side_cards_number"
    v-bind:key="number"
    v-on:choose="unChoose"
    :style="{top: card_top_move(number) + 'px', left: card_left_move(number - 1) + 'px'}"
    :top_power="left_side_cards_power[number].top"
    :bot_power="left_side_cards_power[number].bot"
    :left_power="left_side_cards_power[number].left"
    :right_power="left_side_cards_power[number].right"
    :card_index="number + 1"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSideCard from '@/components/LeftSideCard.vue'
import { type } from 'os';

export default {
  name: 'LeftSideBar',
  components: {
    LeftSideCard
  },
  props: {
    left_side_cards_number: Array,
    left_side_cards_power: Array,
    hand_card_number: {
      type: Number,
      default: 0
    }
  },
  methods: {
    unChoose (currentElem, index) {
      this.hand_card_choose = this.hand_card_choose !== index ? index : 0
      this.$emit('handChoosing', this.hand_card_choose)
      this.$children.forEach((elem) => {
        if (currentElem !== elem) {
          elem.isActive = false
          elem.isChoose = false
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
    
  },
  
  computed () {
    return {
      hand_card_choose: hand_card_number
    }
  },
  mounted () {
    this.$root.$on('remove', (() => {
      this.hand_card_choose = 0
    }))
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
