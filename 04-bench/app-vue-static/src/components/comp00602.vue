<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00917A, calcu01578B, calcu00088A, calcu00963B, calcu00646A } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00917A(seed) - calcu01578B(seed) + calcu00088A(seed) - calcu00963B(seed) + calcu00646A(seed));
</script>

<template>
  <div class="blk">comp00602: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(111 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(291 50% 50%);
  display: inline-block;
}
</style>
