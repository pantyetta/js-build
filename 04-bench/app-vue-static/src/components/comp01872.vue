<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00951B, calcu01364A, calcu00963A, calcu00684A, calcu01472B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00951B(seed) - calcu01364A(seed) + calcu00963A(seed) - calcu00684A(seed) + calcu01472B(seed));
</script>

<template>
  <div class="blk">comp01872: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(356 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(176 50% 50%);
  display: inline-block;
}
</style>
