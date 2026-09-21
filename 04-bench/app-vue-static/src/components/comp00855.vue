<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00056A, calcu00818A, calcu01593A, calcu00536B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00056A(seed) - calcu00818A(seed) + calcu01593A(seed) - calcu00536B(seed));
</script>

<template>
  <div class="blk">comp00855: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(43 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(223 50% 50%);
  display: inline-block;
}
</style>
