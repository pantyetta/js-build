<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01109B, calcu00684B, calcu00185B, calcu01328A, calcu00875B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu01109B(seed) - calcu00684B(seed) + calcu00185B(seed) - calcu01328A(seed) + calcu00875B(seed));
</script>

<template>
  <div class="blk">comp01434: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(214 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(34 50% 50%);
  display: inline-block;
}
</style>
