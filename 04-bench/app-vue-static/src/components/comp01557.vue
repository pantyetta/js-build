<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00778B, calcu00769B, calcu01573B, calcu01250A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00778B(seed) - calcu00769B(seed) + calcu01573B(seed) - calcu01250A(seed));
</script>

<template>
  <div class="blk">comp01557: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(58 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(238 50% 50%);
  display: inline-block;
}
</style>
