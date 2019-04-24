<template>
  <div id="dashboardPage" v-if="isLogIn">
    <!-- Welcome message and getting Users first name -->
    <div class="welcome">Hi {{ $store.state.user.firstName }}, Welcome to Snowcoop</div>
    <el-container>
      <el-main>
        <div class="list-wrapper">
          <div class="list-view-wrapper">
            <el-card class="map-view-card">
              <!-- Displaying map view -->
              <map-view v-if="addressList" v-bind:showList="false" v-bind:addressList="addressList"></map-view>
            </el-card>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script src="./dashboard-page.component.js"></script>
<style src="./dashboard-page.component.css"></style>
