<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01203B, calcu00197B, calcu01322A, calcu00576A, calcu00221B } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu01203B(seed) - calcu00197B(seed) + calcu01322A(seed) - calcu00576A(seed) + calcu00221B(seed));
</script>

<template>
  <div class="blk">comp00767: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(234 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(54 50% 50%);
  display: inline-block;
}
</style>
