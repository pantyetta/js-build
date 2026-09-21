<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00379B, calcu01234A, calcu01514B, calcu01508B, calcu00055A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00379B(seed) - calcu01234A(seed) + calcu01514B(seed) - calcu01508B(seed) + calcu00055A(seed));
</script>

<template>
  <div class="blk">comp00388: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(271 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(91 50% 50%);
  display: inline-block;
}
</style>
