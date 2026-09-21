<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00983A, calcu00627A, calcu00623B, calcu00392B } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00983A(seed) - calcu00627A(seed) + calcu00623B(seed) - calcu00392B(seed));
</script>

<template>
  <div class="blk">comp00935: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(115 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(295 50% 50%);
  display: inline-block;
}
</style>
