<template>
  <div class="Worker">
    <page-header class="mb-3">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </page-header>
    <StaticCard>
      <h3>
        <a
          href="http://www.pref.hokkaido.lg.jp/kz/csk/kny/yuushi/korona.htm"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('中小企業向け相談窓口及び融資取扱について') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス関連肺炎の流行に伴う中小企業向け相談窓口及び融資取扱について'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="http://www.pref.hokkaido.lg.jp/kz/rkr/korona.htm"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('新型コロナ感染症の影響による特別労働相談窓口') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '今般の新型コロナウイルス感染症により影響を受ける事業主、労働者の方向けの、相談窓口や各種支援措置をお知らせします。'
          )
        }}
      </p>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard
  },
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string
    }
  }
})
</script>
