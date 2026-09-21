<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01531B, calcu00252A, calcu01326A, calcu00585A } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu01531B(seed) - calcu00252A(seed) + calcu01326A(seed) - calcu00585A(seed));
</script>

<template>
  <div class="blk">comp01293: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(1 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(181 50% 50%);
  display: inline-block;
}
</style>
