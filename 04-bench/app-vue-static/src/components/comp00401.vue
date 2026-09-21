<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01249B, calcu00936B, calcu00323B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01249B(seed) - calcu00936B(seed) + calcu00323B(seed));
</script>

<template>
  <div class="blk">comp00401: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(197 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(17 50% 50%);
  display: inline-block;
}
</style>
