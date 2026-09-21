<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01094B, calcu00471B, calcu00583B, calcu01512B, calcu01264B } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu01094B(seed) - calcu00471B(seed) + calcu00583B(seed) - calcu01512B(seed) + calcu01264B(seed));
</script>

<template>
  <div class="blk">comp01693: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(228 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(48 50% 50%);
  display: inline-block;
}
</style>
