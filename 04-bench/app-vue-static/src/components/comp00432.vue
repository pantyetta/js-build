<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01024A, calcu00666B, calcu00212B, calcu00570A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01024A(seed) - calcu00666B(seed) + calcu00212B(seed) - calcu00570A(seed));
</script>

<template>
  <div class="blk">comp00432: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(350 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(170 50% 50%);
  display: inline-block;
}
</style>
