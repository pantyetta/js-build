<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01346B, calcu01343B, calcu00322B, calcu00963A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01346B(seed) - calcu01343B(seed) + calcu00322B(seed) - calcu00963A(seed));
</script>

<template>
  <div class="blk">comp01579: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(100 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(280 50% 50%);
  display: inline-block;
}
</style>
