<template>
  <div class="WhatsNew">
    <h3 class="WhatsNew-heading">
      {{ $t('関係するニュース') }}
    </h3>
    <ul class="WhatsNew-list">
      <li v-for="(item, i) in items" :key="i" class="WhatsNew-list-item">
        <small>{{ item.date }}</small
        ><br />
        <a
          class="WhatsNew-list-item-anchor"
          target="_blank"
          rel="noopener noreferrer"
          :href="item.url"
        >
          <span class="WhatsNew-list-item-anchor-link">
            {{ item.title }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.cardTable {
  &.v-data-table {
    box-shadow: 0 -20px 12px -12px #0003 inset;
    th {
      padding: 8px 10px;
      height: auto;
      border-bottom: 1px solid $gray-4;
      white-space: nowrap;
      color: $gray-2;
      font-size: 12px;
      &.text-center {
        text-align: center;
      }
    }

    tbody {
      tr {
        color: $gray-1;
        td {
          padding: 8px 10px;
          height: auto;
          font-size: 12px;
          &.text-center {
            text-align: center;
          }
        }

        &:nth-child(odd) {
          td {
            background: rgba($gray-4, 0.3);
          }
        }

        &:not(:last-child) {
          td:not(.v-data-table__mobile-row) {
            border: none;
          }
        }
      }
    }
    &:focus {
      outline: dotted $gray-3 1px;
    }
  }
}

.note {
  padding: 8px;
  font-size: 12px;
  color: $gray-3;
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true
      // default: []
    }
  }
})
</script>
