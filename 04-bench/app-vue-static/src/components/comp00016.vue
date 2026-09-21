<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01288B, calcu01338A, calcu01250A, calcu01153A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01288B(seed) - calcu01338A(seed) + calcu01250A(seed) - calcu01153A(seed));
</script>

<template>
  <div class="blk">comp00016: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(45 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(225 50% 50%);
  display: inline-block;
}
</style>
