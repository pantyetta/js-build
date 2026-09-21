<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00811B, calcu01574B, calcu01337B, calcu01099B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00811B(seed) - calcu01574B(seed) + calcu01337B(seed) - calcu01099B(seed));
</script>

<template>
  <div class="blk">comp01765: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(63 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(243 50% 50%);
  display: inline-block;
}
</style>
