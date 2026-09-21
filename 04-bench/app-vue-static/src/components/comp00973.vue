<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01432B, calcu01239B, calcu01192A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu01432B(seed) - calcu01239B(seed) + calcu01192A(seed));
</script>

<template>
  <div class="blk">comp00973: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(303 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(123 50% 50%);
  display: inline-block;
}
</style>
