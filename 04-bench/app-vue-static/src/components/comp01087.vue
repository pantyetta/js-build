<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00157B, calcu00563A, calcu00914A, calcu00592B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00157B(seed) - calcu00563A(seed) + calcu00914A(seed) - calcu00592B(seed));
</script>

<template>
  <div class="blk">comp01087: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(200 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(20 50% 50%);
  display: inline-block;
}
</style>
