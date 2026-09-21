<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00814B, calcu01379B, calcu00969A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00814B(seed) - calcu01379B(seed) + calcu00969A(seed));
</script>

<template>
  <div class="blk">comp01770: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(0 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(180 50% 50%);
  display: inline-block;
}
</style>
