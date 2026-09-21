<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00471A, calcu01599A, calcu00560B, calcu00295A, calcu01468B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00471A(seed) - calcu01599A(seed) + calcu00560B(seed) - calcu00295A(seed) + calcu01468B(seed));
</script>

<template>
  <div class="blk">comp01321: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(229 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(49 50% 50%);
  display: inline-block;
}
</style>
