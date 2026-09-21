<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00607A, calcu00314A, calcu01264B, calcu00341B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00607A(seed) - calcu00314A(seed) + calcu01264B(seed) - calcu00341B(seed));
</script>

<template>
  <div class="blk">comp01069: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(304 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(124 50% 50%);
  display: inline-block;
}
</style>
