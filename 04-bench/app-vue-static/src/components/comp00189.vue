<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00737B, calcu00955B, calcu01162B, calcu00913B, calcu00760B } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00737B(seed) - calcu00955B(seed) + calcu01162B(seed) - calcu00913B(seed) + calcu00760B(seed));
</script>

<template>
  <div class="blk">comp00189: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(177 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(357 50% 50%);
  display: inline-block;
}
</style>
