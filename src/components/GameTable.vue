<template>
<div class="game-table">
  <div class="card_wrapper" v-for="(table_card, index) in table_cards" v-bind:key="index">
    <PlayerCard v-if="activities[index] == 1"
    :top_power="table_card.top" 
    :bot_power="table_card.bot" 
    :left_power="table_card.left" 
    :right_power="table_card.right" 
    :player_number="table_card.player"
    :card_index="index" />

    <EnemyCard v-if="activities[index] == 2"
    :top_power="table_card.top" 
    :bot_power="table_card.bot" 
    :left_power="table_card.left" 
    :right_power="table_card.right" 
    :player_number="table_card.player"
    :card_index="index" />

    <PlayerCardFlip v-if="activities[index] == 3"
    :top_power="table_card.top" 
    :bot_power="table_card.bot" 
    :left_power="table_card.left" 
    :right_power="table_card.right" 
    :player_number="table_card.player"
    :card_index="index" />

    <EnemyCardFlip v-if="activities[index] == 4"
    :top_power="table_card.top" 
    :bot_power="table_card.bot" 
    :left_power="table_card.left" 
    :right_power="table_card.right" 
    :player_number="table_card.player"
    :card_index="index" />

    <PlayerCardAppear v-if="activities[index] == 5"
    :top_power="table_card.top" 
    :bot_power="table_card.bot" 
    :left_power="table_card.left" 
    :right_power="table_card.right" 
    :player_number="table_card.player"
    :card_index="index" />

    <EnemyCardAppear v-if="activities[index] == 6"
    :top_power="table_card.top" 
    :bot_power="table_card.bot" 
    :left_power="table_card.left" 
    :right_power="table_card.right" 
    :player_number="table_card.player"
    :card_index="index" />

    <PlayerChoose
    v-if="table_card.player == 0"
    :card_index="index"
    v-on:cardPlacing="cardPlacing" />
  </div>
</div>

</template>

<script>
// @ is an alias to /src
import PlayerCard from '@/components/PlayerCard.vue'
import PlayerChoose from '@/components/PlayerChoose.vue'
import EnemyCard from '@/components/EnemyCard.vue'
import EnemyCardFlip from '@/components/EnemyCardFlip.vue'
import PlayerCardFlip from '@/components/PlayerCardFlip.vue'
import PlayerCardAppear from '@/components/PlayerCardAppear.vue'
import EnemyCardAppear from '@/components/EnemyCardAppear.vue'

export default {
  name: 'GameTable',
  components: {
    PlayerCard,
    PlayerChoose,
    EnemyCard,
    EnemyCardFlip,
    PlayerCardFlip,
    PlayerCardAppear,
    EnemyCardAppear
  },
  props: {
    table_cards: Array,
    player_number: Number,
    enemy_number: Number,
    activities: Array
  },
  methods: {
    cardPlacing (card_position) {
      this.$emit('cardPlacing', card_position)
    }
  },
  mounted () {
  this.$root.$on('addActivities', (activities) => {
    this.$children.forEach((elem) => {
      if (activities[elem.card_index] === 1) {
        elem.isAppear = true
      }
      if (activities[elem.card_index] === 2) {
        console.log(elem.card_index, "tag flip")
      }
    })
      }
    )
  }
}
</script>

<style scoped>
.game-table {
    width: 540px;
    height: 600px;
    margin: auto;
    margin-top: 40px;
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
