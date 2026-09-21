<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01479A, calcu00195A, calcu00988B, calcu00006B, calcu00482A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01479A(seed) - calcu00195A(seed) + calcu00988B(seed) - calcu00006B(seed) + calcu00482A(seed));
</script>

<template>
  <div class="blk">comp01566: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(22 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(202 50% 50%);
  display: inline-block;
}
</style>
