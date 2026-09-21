<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01002A, calcu01275A, calcu00915A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01002A(seed) - calcu01275A(seed) + calcu00915A(seed));
</script>

<template>
  <div class="blk">comp00619: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(82 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(262 50% 50%);
  display: inline-block;
}
</style>
