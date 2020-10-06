<template>
  <div class="treeview">
    <v-container>
      <!-- start v-row -->
      <v-row no-gutters>
        <!-- start tree -->
        <ul id="demo">
          <tree-item class="item" :item="treeData"></tree-item>
        </ul>
        <!-- end tree -->
      </v-row>
      <!-- end v-row -->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "treeview",
  data() {
    return {
      treeData: {
        member_id: "1",
        parent_id: [
          { member_id: "2", curr_active_mp: 10 },
          {
            member_id: "3",
            curr_active_mp: 10,
            parent_id: [
              {
                member_id: "5",
                curr_active_mp: 10,
                parent_id: [
                  { member_id: "9", curr_active_mp: 10 },
                  { member_id: "10", curr_active_mp: 10 },
                ],
              },
              { member_id: "6", curr_active_mp: 10 },
              { member_id: "7", curr_active_mp: 10 },
              {
                member_id: "8",
                curr_active_mp: 10,
                parent_id: [
                  { member_id: "11", curr_active_mp: 10 },
                  { member_id: "12", curr_active_mp: 10 },
                ],
              },
            ],
          },
          { member_id: "4", curr_active_mp: 10 },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>