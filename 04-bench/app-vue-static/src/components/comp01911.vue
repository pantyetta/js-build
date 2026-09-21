<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01339A, calcu00869B, calcu00778A, calcu01589B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu01339A(seed) - calcu00869B(seed) + calcu00778A(seed) - calcu01589B(seed));
</script>

<template>
  <div class="blk">comp01911: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(49 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(229 50% 50%);
  display: inline-block;
}
</style>
