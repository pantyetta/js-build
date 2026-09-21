<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01072A, calcu00375B, calcu01310B, calcu01085B, calcu01279A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu01072A(seed) - calcu00375B(seed) + calcu01310B(seed) - calcu01085B(seed) + calcu01279A(seed));
</script>

<template>
  <div class="blk">comp01139: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(97 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(277 50% 50%);
  display: inline-block;
}
</style>
