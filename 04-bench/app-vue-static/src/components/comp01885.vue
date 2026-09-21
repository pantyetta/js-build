<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00732B, calcu00770A, calcu01526A, calcu00602B } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00732B(seed) - calcu00770A(seed) + calcu01526A(seed) - calcu00602B(seed));
</script>

<template>
  <div class="blk">comp01885: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(150 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(330 50% 50%);
  display: inline-block;
}
</style>
