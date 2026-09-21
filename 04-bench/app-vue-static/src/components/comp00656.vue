<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00445B, calcu00614A, calcu00224B, calcu01349A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00445B(seed) - calcu00614A(seed) + calcu00224B(seed) - calcu01349A(seed));
</script>

<template>
  <div class="blk">comp00656: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(299 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(119 50% 50%);
  display: inline-block;
}
</style>
