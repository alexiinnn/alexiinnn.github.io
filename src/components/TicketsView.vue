<template>
    <div class="md-alignment-top-center">
        <md-list class="md-triple-line counters">
            <md-subheader>Counters</md-subheader>
            <md-list-item>

                <div class="md-list-item-text count-item">
                    <span class="count-item-label">Entrance</span>
                    <div class="count-block">
                        <md-button class="md-icon-button md-raised" @click="increaseCounter('Entrance')">
                            <md-icon>add</md-icon>
                        </md-button>
                        <md-input v-model="entranceCount" readonly></md-input>
                        <md-button class="md-icon-button md-raised"  @click="decreaseCounter('Entrance')">
                            <md-icon>remove</md-icon>
                        </md-button>
                    </div>
                </div>

            </md-list-item>

            <md-divider class="md-inset"></md-divider>

            <md-list-item>

                <div class="md-list-item-text count-item">
                    <span class="count-item-label">Pre-sale</span>
                    <div class="count-block">
                        <md-button class="md-icon-button md-raised" @click="increaseCounter('Presale')">
                            <md-icon>add</md-icon>
                        </md-button>
                        <md-input v-model="presaleCount" readonly></md-input>
                        <md-button class="md-icon-button md-raised"  @click="decreaseCounter('Presale')">
                            <md-icon>remove</md-icon>
                        </md-button>
                    </div>
                </div>

            </md-list-item>

            <md-divider class="md-inset"></md-divider>

            <md-list-item>

                <div class="md-list-item-text count-item">
                    <span class="count-item-label">Free</span>
                    <div class="count-block">
                        <md-button class="md-icon-button md-raised" @click="increaseCounter('Free')">
                            <md-icon>add</md-icon>
                        </md-button>
                        <md-input v-model="freeCount" readonly></md-input>
                        <md-button class="md-icon-button md-raised"  @click="decreaseCounter('Free')">
                            <md-icon>remove</md-icon>
                        </md-button>
                    </div>
                </div>

            </md-list-item>

            <md-divider class="md-inset"></md-divider>

            <md-list-item>

                <!--<div class="md-list-item-text count-item">-->
                    <!--<span class="count-item-label">Know From</span>-->
                    <!--<div class="count-block">-->
                    <div class="md-layout-item">
                    <md-field>
                        <md-select v-model="source" name="source" id="source" placeholder="Source">
                            <md-option value="Facebook">Facebook</md-option>
                            <md-option value="Instagram">Instagram</md-option>
                            <md-option value="vk">vk</md-option>
                            <md-option value="web">web</md-option>
                            <md-option value="radio">radio</md-option>
                            <md-option value="wallpaper">wallpaper</md-option>
                        </md-select>
                    </md-field>
                    </div>
                    <!--</div>-->
                <!--</div>-->

            </md-list-item>


        </md-list>

        <md-table md-card class="log-list">
            <md-table-toolbar>
                <h1 class="md-title">Actions</h1>
            </md-table-toolbar>

            <md-table-row>
                <md-table-head>Time</md-table-head>
                <md-table-head>Ticket Type</md-table-head>
                <md-table-head>Action</md-table-head>
                <md-table-head>Know From</md-table-head>
            </md-table-row>

            <md-table-row v-for="action in actions" :key="action.time">
                <md-table-cell>{{ new Date(action.time).toLocaleTimeString() }}</md-table-cell>
                <md-table-cell>{{ action.ticketType }}</md-table-cell>
                <md-table-cell>{{ action.actionType }}</md-table-cell>
                <md-table-cell>{{ action.from }}</md-table-cell>
            </md-table-row>

        </md-table>


    </div>
</template>
<script>
  export default {
    data: () => ({
      freeCount: 0,
      presaleCount: 0,
      entranceCount: 0,
      actions: [],
      source: ''
    }),
    methods: {
      getTimestamp () {
        return +new Date()
      },
      saveToLocalStorage () {
        localStorage.setItem('actions', JSON.stringify(this.actions))
        localStorage.setItem('freeCount', JSON.stringify(this.freeCount))
        localStorage.setItem('presaleCount', JSON.stringify(this.presaleCount))
        localStorage.setItem('entranceCount', JSON.stringify(this.entranceCount))
      },
      increaseCounter (ticketType) {
        this[ticketType.toLowerCase() + 'Count']++
        this.actions.push({
          time: this.getTimestamp(),
          ticketType: ticketType,
          actionType: 'added',
          from: this.source
        })
        this.source = ''
        this.saveToLocalStorage()
      },
      decreaseCounter (ticketType) {
        this[ticketType.toLowerCase() + 'Count']--
        this.actions.push({
          time: this.getTimestamp(),
          ticketType: ticketType,
          actionType: 'removed'
        })
        this.saveToLocalStorage()
      }
    },
    mounted () {
      this.actions = JSON.parse(localStorage.actions)
      this.freeCount = +localStorage.freeCount || 0
      this.presaleCount = +localStorage.presaleCount || 0
      this.entranceCount = +localStorage.entranceCount || 0
    }
  }
</script>
<style scoped lang="scss">
    .md-menu-content-container.md-scrollbar.md-theme-default {
        background-color: white;
    }

    .md-list {
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        .md-list-item {
            width: 100%;
        }

    }
    .md-list-item-text * {
        width: auto;
    }
    .counters {
        margin: 15px;
        background: rgba(white, 0.8);
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        border-radius: 2px;

        .md-subheader {
            width: 100%;
            font-weight: 400;
            letter-spacing: .02em;
            font-size: 20px;
        }

        .md-button {
            background-color: white;
        }
    }

    .count-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .count-item-label {
            min-width: 90px;
        }

        .md-input {
            width: 50px;
            margin: 0 15px;
            text-align: center;
            border-radius: 3px;
            border: 1px solid white;
        }
    }

    .count-block {
        display: inline-flex;
        padding: 15px 3px;
        @media (min-width: 768px) {
            padding: 15px;
        }
    }

    .log-list {
        background: rgba(white, 0.8);
    }
</style>