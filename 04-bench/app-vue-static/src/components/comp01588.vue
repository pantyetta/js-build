<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01326A, calcu01535B, calcu01599B, calcu01003A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01326A(seed) - calcu01535B(seed) + calcu01599B(seed) - calcu01003A(seed));
</script>

<template>
  <div class="blk">comp01588: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(330 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(150 50% 50%);
  display: inline-block;
}
</style>
