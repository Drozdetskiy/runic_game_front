<template>
    <div class="home" id="home">
    <Navbar 
    :turn="turn"
    :player_number="player_number"
    :enemy_number="enemy_number"
    :player_score="player_score"
    :enemy_score="enemy_score"/>
    <LeftSideBar
    :left_side_cards_power="left_side_cards_power"
    :left_side_cards_number="left_side_cards_number"
    :hand_card_number="hand_card_number"
    v-on:handChoosing="handChoosing" />
    <GameTable
    :table_cards="table_cards"
    v-on:cardPlacing="cardPlacing"
    :player_number="player_number"
    :enemy_number="enemy_number"
    :activities="activities" />
    <RightSideBar :right_side_cards_power="right_side_cards_power" :right_side_cards_number="right_side_cards_number"/>
    </div>

</template>

<script>
// @ is an alias to /src
import LeftSideBar from '@/components/LeftSideBar.vue'
import GameTable from '@/components/GameTable.vue'
import RightSideBar from '@/components/RightSideBar.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'home',
  props: {
    hash_url: String,
    left_side_cards_number: {
      type: Array,
      default: [0,]
    },
    left_side_cards_power: {
      type: Array,
      default: [{'top': 0, 'bot': 0, 'left': 0, 'right': 0, 'player': 1},]
    },
    right_side_cards_number: {
      type: Array,
      default: [0,]
    },
    right_side_cards_power: {
      type: Array,
      default: [{'top': 0, 'bot': 0, 'left': 0, 'right': 0, 'player': 1},]
    },
    table_cards: Array,
    turn: Number
  },
  components: {
    LeftSideBar,
    GameTable,
    RightSideBar,
    Navbar
  },
  data () {
    return {
      hash_url_data: [...this.hash_url].join(''),
      hand_card_number: 0,
      table_card_queue: {
        0: [0, 0],
        1: [0, 1],
        2: [0, 2],
        3: [1, 0],
        4: [1, 1],
        5: [1, 2],
        6: [2, 0],
        7: [2, 1],
        8: [2, 2]
      },
      player_number: 0,
      enemy_number: 0,
      player_store: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      activities: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      player_score: 5,
      enemy_score: 5
    }
  },
  mounted () {
    this.$http
      .get(`http://127.0.0.1:8000/api/runic_game_action/${this.hash_url_data}`)
      .then(response => {this.get_data(response)})
  },
  methods: {
    get_data (response) {
          let json_val = JSON.parse(response.data)
          this.player_number = json_val.player_number
          this.enemy_number = json_val.bot_number
          this.left_side_cards_number = json_val[`card_queue_${this.player_number}`]
          this.left_side_cards_power = json_val[`player_${this.player_number}_hand`]
          this.right_side_cards_number = json_val[`card_queue_${this.enemy_number}`]
          this.right_side_cards_power = json_val[`player_${this.enemy_number}_hand`]
          this.table_cards = json_val.table
          this.turn = json_val.turn
          this.player_score = json_val[`player_${this.player_number}_score`]
          this.enemy_score = json_val[`player_${this.enemy_number}_score`]
          this.addActivities()
    },
    cardPlacing (card_position) {
      if (this.hand_card_number) {
        let[i, j] = this.table_card_queue[card_position]
        let player_turn = 
          {
            'card_index': this.hand_card_number - 1,
            'i': i,
            'j': j
          }
        
        let active_player = this.turn % 2 ? 1 : 2
        if (active_player == this.player_number) {
          this.$root.$emit('disappear', card_position)
          console.log(player_turn)
          setTimeout(() => {
            this.$http.post(`http://127.0.0.1:8000/api/runic_game_action/${this.hash_url_data}`, {
              'player_turn': player_turn
            }
            )
            .then(
              response => {
                this.get_data(response)
            }
            )
          }, 400)
          setTimeout(() => {
          this.$http.get(`http://127.0.0.1:8000/api/runic_game_action/${this.hash_url_data}`)
          .then(response => {this.get_data(response)})
          }, 2000)
        }
        this.hand_card_number = 0
        this.$root.$emit('remove');
      }
    },
    handChoosing (card_position) {
      this.hand_card_number = card_position
    },
    addActivities () {
      let indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      let activities = [0, 0, 0, 0, 0, 0, 0, 0, 0]
      indexes.forEach(index => {
        if (this.player_store[index] && this.player_store[index] !== this.table_cards[index].player && this.table_cards[index]) {
            if (this.table_cards[index].player == this.player_number) {
              activities[index] = 3
            }
            else {
              activities[index] = 4
            }
          }
        else {
          if (!this.player_store[index] && !this.table_cards[index].player) {
            activities[index] = 0
          }
          if (this.table_cards[index].player == this.player_number && this.player_store[index] == this.player_number) {
            activities[index] = 1
          }
          if (this.table_cards[index].player == this.enemy_number && this.player_store[index] == this.enemy_number) {
            activities[index] = 2
          }
          if (!this.player_store[index] && this.table_cards[index].player == this.player_number) {
            activities[index] = 5
          }
          if (!this.player_store[index] && this.table_cards[index].player == this.enemy_number) {
            activities[index] = 6
          }
        }
        this.player_store[index] = this.table_cards[index].player
      })
      this.activities = activities
      console.log(activities)
    }
  }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#home {
    height: 100vh;
    display: flex;
}

body {
  background-color: rgba(207, 204, 204, 0.5);
  background-image: linear-gradient( 45deg,#ddd 25%, transparent 25%, transparent 74%, #ddd 75%, #ddd), linear-gradient( 45deg,#ddd 25%, transparent 25%, transparent 74%, #ddd 75%, #ddd);
  background-size:20px 20px;
  background-position: 0 0, 10px 10px;
}
</style>
