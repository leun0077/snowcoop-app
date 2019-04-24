<template>
  <div id="dashboardPage" v-if="isLogIn">
    <el-container>
      <el-main>
        <div class="welcome">Hi {{firstName}}, Welcome to Snowcoop</div>
        <!-- Add map view to the dashboard -->
        <div class="list-wrapper">
          <div class="list-view-wrapper">
            <el-card class="map-view-card">
              <!-- toggel list alse to hide list of addresses -->
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
