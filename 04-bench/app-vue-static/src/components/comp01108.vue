<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01244A, calcu01089B, calcu01034B, calcu01461B, calcu01213B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01244A(seed) - calcu01089B(seed) + calcu01034B(seed) - calcu01461B(seed) + calcu01213B(seed));
</script>

<template>
  <div class="blk">comp01108: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(112 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(292 50% 50%);
  display: inline-block;
}
</style>
