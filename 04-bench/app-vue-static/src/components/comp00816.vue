<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00941B, calcu01292B, calcu00262B, calcu01252A, calcu01347B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00941B(seed) - calcu01292B(seed) + calcu00262B(seed) - calcu01252A(seed) + calcu01347B(seed));
</script>

<template>
  <div class="blk">comp00816: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(38 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(218 50% 50%);
  display: inline-block;
}
</style>
