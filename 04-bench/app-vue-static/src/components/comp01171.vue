<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00509B, calcu01183B, calcu01189A } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00509B(seed) - calcu01183B(seed) + calcu01189A(seed));
</script>

<template>
  <div class="blk">comp01171: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(69 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(249 50% 50%);
  display: inline-block;
}
</style>
