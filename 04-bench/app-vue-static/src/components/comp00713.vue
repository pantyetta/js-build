<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01470B, calcu00877A, calcu01259B, calcu00952A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu01470B(seed) - calcu00877A(seed) + calcu01259B(seed) - calcu00952A(seed));
</script>

<template>
  <div class="blk">comp00713: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(282 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(102 50% 50%);
  display: inline-block;
}
</style>
