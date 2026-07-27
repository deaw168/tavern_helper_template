<template>
  <section class="section">
    <div class="section-header" @click="collapsed = !collapsed">
      <i class="fa-solid fa-heart-pulse section-icon body-icon"></i>
      <span class="section-label">身体状态</span>
      <i
        class="fa-solid section-arrow"
        :class="collapsed ? 'fa-chevron-right' : 'fa-chevron-down'"
      ></i>
    </div>

    <div v-if="!collapsed" class="section-body">
      <div class="body-grid">
        <div
          v-for="item in items"
          :key="item.key"
          class="body-item"
        >
          <div class="body-item-header">
            <i :class="item.icon" class="body-item-icon"></i>
            <span class="body-item-label">{{ item.label }}</span>
          </div>
          <div class="body-item-value">{{ item.value || '未描述' }}</div>
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
  {
    key: '小穴',
    label: '小穴',
    icon: 'fa-solid fa-droplet',
    value: store.data?.身体?.小穴,
  },
  {
    key: '后庭',
    label: '后庭',
    icon: 'fa-solid fa-circle-dot',
    value: store.data?.身体?.后庭,
  },
  {
    key: '乳房',
    label: '乳房',
    icon: 'fa-solid fa-heart',
    value: store.data?.身体?.乳房,
  },
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

.body-icon {
  color: var(--c-body-accent);
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
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.body-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.body-item {
  background: var(--c-surface-alt);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 10px;
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--c-body-accent);
  }
}

.body-item-header {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 6px;
}

.body-item-icon {
  font-size: 11px;
  color: var(--c-body-accent);
}

.body-item-label {
  font-size: 11px;
  color: var(--c-text-muted);
}

.body-item-value {
  font-size: 13px;
  color: var(--c-text);
  line-height: 1.5;
  min-height: 18px;
}
</style>
