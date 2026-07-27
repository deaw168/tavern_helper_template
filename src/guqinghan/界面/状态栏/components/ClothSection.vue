<template>
  <section class="section">
    <div class="section-header" @click="collapsed = !collapsed">
      <i class="fa-solid fa-shirt section-icon cloth-icon"></i>
      <span class="section-label">穿衣状态</span>
      <i
        class="fa-solid section-arrow"
        :class="collapsed ? 'fa-chevron-right' : 'fa-chevron-down'"
      ></i>
    </div>

    <div v-if="!collapsed" class="section-body">
      <div class="cloth-list">
        <div
          v-for="item in items"
          :key="item.key"
          class="cloth-row"
        >
          <span class="cloth-key">{{ item.label }}</span>
          <span class="cloth-val">{{ item.value || '未描述' }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();
const collapsed = ref(false);

const items = computed(() => [
  { key: '上身', label: '上身', value: store.data?.穿衣?.上身 },
  { key: '下身', label: '下身', value: store.data?.穿衣?.下身 },
  { key: '胸罩', label: '胸罩', value: store.data?.穿衣?.胸罩 },
  { key: '内裤', label: '内裤', value: store.data?.穿衣?.内裤 },
  { key: '袜子', label: '袜子', value: store.data?.穿衣?.袜子 },
]);
</script>

<style lang="scss" scoped>
.section {
  border-bottom: 1px solid var(--c-border);

  &:last-child {
    border-bottom: none;
  }
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s;

  &:hover {
    background: var(--c-surface);
  }
}

.section-icon {
  font-size: 13px;
}

.cloth-icon {
  color: var(--c-cloth-accent);
}

.section-label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--c-text-dim);
}

.section-arrow {
  margin-left: auto;
  font-size: 10px;
  color: var(--c-text-muted);
  transition: transform 0.2s;
}

.section-body {
  padding: 0 16px 12px;
  animation: slideDown 0.25s ease;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.cloth-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cloth-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  background: var(--c-surface-alt);
  border-radius: 6px;
  border: 1px solid transparent;
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--c-cloth-accent);
  }
}

.cloth-key {
  font-size: 11px;
  color: var(--c-text-muted);
  min-width: 28px;
  text-align: right;
}

.cloth-val {
  font-size: 13px;
  color: var(--c-text);
  flex: 1;
}
</style>
