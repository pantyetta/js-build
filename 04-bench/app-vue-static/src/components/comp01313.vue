<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01003B, calcu00002B, calcu00753B, calcu00944A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu01003B(seed) - calcu00002B(seed) + calcu00753B(seed) - calcu00944A(seed));
</script>

<template>
  <div class="blk">comp01313: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(262 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(82 50% 50%);
  display: inline-block;
}
</style>
