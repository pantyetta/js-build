<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01080A, calcu01395A, calcu00592B, calcu01272B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu01080A(seed) - calcu01395A(seed) + calcu00592B(seed) - calcu01272B(seed));
</script>

<template>
  <div class="blk">comp01683: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(253 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(73 50% 50%);
  display: inline-block;
}
</style>
