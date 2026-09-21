<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00332B, calcu01205B, calcu00252B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00332B(seed) - calcu01205B(seed) + calcu00252B(seed));
</script>

<template>
  <div class="blk">comp00172: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(287 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(107 50% 50%);
  display: inline-block;
}
</style>
