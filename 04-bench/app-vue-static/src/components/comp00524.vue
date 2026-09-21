<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01485B, calcu01568A, calcu00128A, calcu00337B, calcu00827A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01485B(seed) - calcu01568A(seed) + calcu00128A(seed) - calcu00337B(seed) + calcu00827A(seed));
</script>

<template>
  <div class="blk">comp00524: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(138 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(318 50% 50%);
  display: inline-block;
}
</style>
