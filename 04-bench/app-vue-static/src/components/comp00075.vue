<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01349B, calcu01099A, calcu01576A } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu01349B(seed) - calcu01099A(seed) + calcu01576A(seed));
</script>

<template>
  <div class="blk">comp00075: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(164 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(344 50% 50%);
  display: inline-block;
}
</style>
