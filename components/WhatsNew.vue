<template>
  <div class="WhatsNew">
    <h3 class="WhatsNew-heading">
      {{ $t('最新のお知らせ') }}
    </h3>
    <ul class="WhatsNew-list">
      <li class="WhatsNew-list-item">
        <a
          class="WhatsNew-list-item-anchor"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.city.chitose.lg.jp/docs/9855.html"
        >
          <span class="WhatsNew-list-item-anchor-link">
            {{ $t('千歳市の最新発表はこちら') }}
          </span>
        </a>
      </li>
      <li class="WhatsNew-list-item">
        <a
          class="WhatsNew-list-item-anchor"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/407542006448330/"
        >
          <span class="WhatsNew-list-item-anchor-link">
            {{ $t('千歳市「災害・防災・減災情報」') }}
            {{ $t('フェイスブックページ') }}
          </span>
        </a>
      </li>

      <li>
        <a
          class="WhatsNew-list-item-anchor"
          target="_blank"
          rel="noopener noreferrer"
          href="https://faavo.jp/doodonan/project/4359"
        >
          <span class="WhatsNew-list-item-anchor-link">
            {{
              $t('マチの飲食店を応援したい。支援プロジェクト開始（4/30まで）')
            }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { convertDateToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    isInternalLink(path: string): boolean {
      return !/^https?:\/\//.test(path)
    },
    formattedDate(dateString: string) {
      return convertDateToISO8601Format(dateString)
    }
  }
})
</script>

<style lang="scss">
.WhatsNew {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;
}

.WhatsNew-heading {
  display: flex;
  align-items: center;

  @include card-h2();

  margin-bottom: 12px;
  color: $gray-2;
  margin-left: 12px;

  &-icon {
    margin: 3px;
  }
}

.WhatsNew .WhatsNew-list {
  padding-left: 0;
  list-style-type: none;

  &-item {
    &-anchor {
      display: inline-block;
      text-decoration: none;
      margin: 5px;
      font-size: 14px;

      @include lessThan($medium) {
        display: flex;
        flex-wrap: wrap;
      }

      &-time {
        flex: 0 0 90px;

        @include lessThan($medium) {
          flex: 0 0 100%;
        }

        color: $gray-1;
      }

      &-link {
        flex: 0 1 auto;

        @include text-link();

        @include lessThan($medium) {
          padding-left: 8px;
        }
      }

      &-ExternalLinkIcon {
        margin-left: 2px;
        color: $gray-3 !important;
      }
    }
  }
}
</style>
