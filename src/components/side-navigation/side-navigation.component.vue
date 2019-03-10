<template>
  <div id="SideNavigation">
    <el-menu default-active="activeLink" class="side-nav-menu" :router="true">
      <div class="logo">
        <span>Snowcoop</span>
      </div>
      <el-menu-item index="/dashboard">
        <span>Dashboard</span>
      </el-menu-item>
      <el-menu-item index="/list">
        <span>Address List</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script src="./side-navigation.component.js"></script>
<style src="./side-navigation.component.css" scoped></style>