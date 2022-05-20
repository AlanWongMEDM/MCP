<template>
  <v-container
    id="dashboard-view"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
      >
        <material-card
          color="green"
          full-header
        >
          <template #heading>
            <v-tabs
              v-model="tabs"
              background-color="transparent"
              slider-color="white"
              class="pa-3"
            >
              <v-tab class="mr-3">
                Account List
              </v-tab>
              <v-tab class="mr-3">
                Account Right
              </v-tab>
              <v-tab class="mr-3">
                School List
              </v-tab>              
            </v-tabs>
          </template>
          <v-tabs-items
            v-model="tabs"
            background-color="transparent"
          >
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >          
              <v-card-text>
                <template>
                  <v-row v-for="(task, i) in tasks[tabs]"
                    :key="i"

                  > 
                   <v-col col="12" class="col-12">

                      <span v-for="(button, b) in task.buttons" :key="b">
                              <app-btn
                              :href="button['link']"

          rel="noopener noreferrer"
        >

          <span>{{ button['text'] }}</span>
        </app-btn>
                    </span>

                   </v-col>
                  <v-col col="12" class="col-12">

             <v-data-table
              :headers="task.headers"
              :items="task.items"
              show-select
            />
            </v-col>
                  </v-row>
                </template>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>                           
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'
  import Vue from 'vue'

  export default {
    name: 'Account',

    data: () => ({
tasks: {
        0: [{
      buttons:[
        {
          text: 'Create Account',
          link: '/Account/Create',
        },        
      ],
      headers: [        
        {
          sortable: false,
          text: '#',
          value: 'number',
        },
        {
          sortable: true,
          text: 'User Chinese Name',
          value: 'name_chi',
          align: 'left',
        },
        {
          sortable: true,
          text: 'User English Name',
          value: 'name_eng',
          align: 'left',
        },
        {
          sortable: true,
          text: 'User Type',
          value: 'user_type',
          align: 'left',
        },  
        {
          sortable: true,
          text: 'School',
          value: 'school',
          align: 'left',
        }, 
        {
          sortable: false,
          text: 'Edit',
          value: 'id',
        },
      ],
      items: [
        {
          number: 1,
          id: 1,
          name_chi: '陳大文',
          name_eng: 'Chan Tai Man',
          user_type: 'Teacher',
          school: '現代小學',
        },
        {
          number: 2,
          id: 2,
          name_chi: '王小虎',
          name_eng: 'Wong Siu Fu',
          user_type: 'Principal',
          school: '現代小學',
        },
        {
          number: 3,
          id: 3,
          name_chi: '李小明',
          name_eng: 'Lee Siu Ming',
          user_type: 'Teacher',
          school: '現代小學',
        },
        {
          number: 4,
          id: 4,
          name_chi: '何笑',
          name_eng: 'Ho Siu',
          user_type: 'Principal',
          school: '現代小學',
        },
        {
          number: 5,
          id: 5,
          name_chi: '張大力',
          name_eng: 'Cheung Tai Nic',
          user_type: 'Teacher',
          school: '現代小學',
        },
      ]
        }],

        1: [{
      buttons:[
        {
          text: 'Create Account Right',
          link: '/Account_Right/Create',
        },        
      ],          
      headers: [
        {
          sortable: false,
          text: '#',
          value: 'number',
        },
        {
          sortable: true,
          text: 'User Type(Chinese)',
          value: 'user_type_chi',
          align: 'left',
        },
        {
          sortable: true,
          text: 'User Type(English)',
          value: 'user_type_eng',
          align: 'left',
        },
        {
          sortable: false,
          text: 'Edit',
          value: 'id',
        },
      ],
      items: [
        {
          number: 1,
          id: 1,
          user_type_chi: '超級管理員',
          user_type_eng: 'Superadmin',
        },
        {
          number: 2,
          id: 2,
          user_type_chi: '校長',
          user_type_eng: 'Principal',
        },
        {
          number: 3,
          id: 3,
          user_type_chi: '老師',
          user_type_eng: 'Teacher',
        },
        {
          number: 4,
          id: 4,
          user_type_chi: '學生',
          user_type_eng: 'Student',
        },
      ]
        }],
        2: [{
      buttons:[
        {
          text: 'Create School',
          link: '/School/Create',
        },        
      ],           
      headers: [
        {
          sortable: false,
          text: '#',
          value: 'number',
        },
        {
          sortable: true,
          text: 'School Name(Chinese)',
          value: 'school_name_chi',
          align: 'left',
        },
        {
          sortable: true,
          text: 'School Name(English)',
          value: 'school_name_eng',
          align: 'left',
        },
        {
          sortable: true,
          text: 'School type',
          value: 'school_type',
          align: 'left',
        },        
        {
          sortable: false,
          text: 'Edit',
          value: 'id',
        },
      ],
      items: [
        {
          number: 1,
          id: 1,
          school_name_chi: '現代幼稚園',
          school_name_eng: 'Modern Kindergarten',
          school_type: 'Kindergarten',
        },
        {
          number: 2,
          id: 2,
          school_name_chi: '現代小學',
          school_name_eng: 'Modern Primary School',
          school_type: 'Primary School',
        },
        {
          number: 3,
          id: 3,
          school_name_chi: '現代中學',
          school_name_eng: 'Modern Middle School',
          school_type: 'Middle School',
        },
      ]
        }] ,             
        },
      tabs: 0,
    }),

    computed: {
      sales: get('sales/sales'),
      totalSales () {
        return this.sales.reduce((acc, val) => acc + val.salesInM, 0)
      },
    },
  }
</script>
