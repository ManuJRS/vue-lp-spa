<template>
  <div class="w-full h-[550px]">
    <model-viewer
      src="/src/models/gaming_chair.glb"
      alt="Gaming chair 3D model"
          disable-pan
      camera-controls
      auto-rotate
      auto-rotate-delay="2000"
      exposure="1"
      style="width: 100%; height: 120%;"
      field-of-view="30deg"
      min-field-of-view="25deg"
      max-field-of-view="35deg"
    >
    </model-viewer>
  </div>
</template>
